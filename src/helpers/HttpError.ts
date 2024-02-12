const messageList: Record<number, string> = {
    400: "missing fields",
    401: "Not authorized",
    404: "Not found",
  };
  
  const HttpError = (status: number, message: string = messageList[status]): Error => {
    const error = new Error(message);
    (error as any).status = status;
    return error;
  };
  
  export default HttpError;
