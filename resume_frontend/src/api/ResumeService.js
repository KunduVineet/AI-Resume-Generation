export const baseURL = "http://localhost:8080";

export const getResume = async (description) => {
    try {
        const response = await fetch("http://localhost:8080/api/v1/resume/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userDescription: description }),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();
        result.data = JSON.parse(result.data); // Convert stringified JSON to object

        return result;
    } catch (error) {
        console.error("Error fetching resume:", error);
        throw error;
    }
};

