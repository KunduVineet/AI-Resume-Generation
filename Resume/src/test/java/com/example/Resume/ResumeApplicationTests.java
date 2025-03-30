package com.example.Resume;

import com.example.Resume.Service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResumeApplicationTests {
	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException {
		resumeService.generateResumeresponse("I am Vineet Kundu with a 1 Year Experience as Java Full Stack Web Developer at Qubitnets Technologies ");
	}


}
