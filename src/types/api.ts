export type dataProps = {
  status: number;
  message?: string;
  success: boolean;
  error?: string;
  data?: Array<object> | object;
};
