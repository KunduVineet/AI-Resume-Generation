package com.example.Resume.Controller;

import com.example.Resume.ResumeRequest;
import com.example.Resume.Service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {

    @Autowired
    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/generate")
    public ResponseEntity<Map<String, Object>> getResumeData(@RequestBody ResumeRequest resumeRequest) throws IOException {

        Map<String, Object> stringObjectMap = resumeService.generateResumeresponse(resumeRequest.userDescription());

      return  new ResponseEntity<>(stringObjectMap, HttpStatus.OK);

    }
}
