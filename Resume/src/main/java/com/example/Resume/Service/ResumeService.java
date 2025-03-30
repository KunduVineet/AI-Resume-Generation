package com.example.Resume.Service;

import org.json.JSONObject;

import java.io.IOException;
import java.util.Map;

public interface ResumeService {
    Map<String, Object> generateResumeresponse(String userResumeDescription) throws IOException;
}
