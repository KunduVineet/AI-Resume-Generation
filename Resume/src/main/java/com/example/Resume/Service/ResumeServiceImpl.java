package com.example.Resume.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.HashMap;


@Service
public class ResumeServiceImpl implements ResumeService {

    private final ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeresponse(String userResumeDescription) throws IOException {

       String promptString = this.loadPromptFromFile("resume_prompt.txt");
      String promptContent =  this.putValuesToTemplate(promptString, Map.of(
               "userDescription", userResumeDescription
       ));

        Prompt prompt = new Prompt(promptContent);
        String response = chatClient.prompt(prompt).call().content();

        Map<String, Object> stringObjectMap = parseMultipleResponses(response);

        return stringObjectMap;
    }

  String  loadPromptFromFile(String filename) throws IOException {
      Path path =  new ClassPathResource(filename).getFile().toPath();

      return Files.readString(path);
    }
    String putValuesToTemplate(String template, Map<String, String> values) {
        for(Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{"+entry.getKey()+"}", entry.getValue());
        }
        return template;
    }

        public static Map<String, Object> parseMultipleResponses(String response) {
            Map<String, Object> responseMap = new HashMap<>();
            ObjectMapper objectMapper = new ObjectMapper();


            // Extract content inside <think> tags
            int thinkStart = response.indexOf("<think>") + 7;
            int thinkEnd = response.indexOf("</think>");
            if (thinkStart != -1 && thinkEnd != -1) {
                String thinkContent = response.substring(thinkStart, thinkEnd).trim();
                responseMap.put("think", thinkContent);
            } else {
                responseMap.put("think", null); // Handle missing <think> tags
            }

            // Extract content that is in JSON format
            try {
                // Convert JSON String to Map
                Map<String, Object> jsonMap = objectMapper.readValue(response, Map.class);
                responseMap.put("data", jsonMap);
            } catch (Exception e) {
                responseMap.put("data", null);
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }

            return responseMap;
        }



}
