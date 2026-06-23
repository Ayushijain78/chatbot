import axios from "axios";

export const sendMessage =
  async (
    message: string
  ) => {
    const response =
      await axios.post(
        "http://localhost:5000/api/chat",
        {
          message,
        }
      );

    return response.data;
  };