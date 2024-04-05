export interface MessageResponse {
  success: boolean;
  message: string;
  error?: null | string;
  data?: null | object | unknown[];
}

const build_response = (success: boolean, message: string, error?: null | string, data?: null | object | unknown[]): MessageResponse => {
  const response: MessageResponse = {
    success,
    message,
  };

  if (error) {
    response.error = error;
  }

  if (data) {
    response.data = data;
  }

  return response;
};

export default build_response;
