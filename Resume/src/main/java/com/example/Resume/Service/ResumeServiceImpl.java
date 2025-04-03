package com.example.Resume.Service;

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
        int jsonStart = response.indexOf("{", thinkEnd);
        int jsonEnd = response.lastIndexOf("}");
        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd + 1).trim();
            try {
                responseMap.put("data", jsonContent); // Store JSON string as value
            } catch (Exception e) {
                responseMap.put("data", null); // Handle invalid JSON
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            responseMap.put("data", null); // Handle missing JSON
        }

        return responseMap;
    }



}