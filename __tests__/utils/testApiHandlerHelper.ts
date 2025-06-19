import { createMocks } from "node-mocks-http";
import type { NextApiHandler } from "next";

type SuccessArgs<T> = {
  handler: NextApiHandler;
  daoMock: jest.Mock<Promise<T>>;
  mockData: T;
  expectedResponse: {
    matcher: jest.Mock;
    body: {
      status: number;
      success: boolean;
      data: unknown;
    };
  };
};

type ErrorArgs = {
  handler: NextApiHandler;
  daoMock: jest.Mock<Promise<unknown>>;
  mockError: unknown;
  expectedResponse: {
    matcher: jest.Mock;
    body: {
      status: number;
      success: boolean;
      error: string;
      message: unknown;
    };
  };
};

type InvalidMethodArgs = {
  handler: NextApiHandler;
  method: string;
  expectedResponse: {
    matcher: jest.Mock;
    body: {
      status: number;
      success: boolean;
      error: string;
      message: string;
    };
  };
};

export async function testSuccessfulGET<T>({
  handler,
  daoMock,
  mockData,
  expectedResponse,
}: SuccessArgs<T>) {
  daoMock.mockResolvedValue(mockData);

  const { req, res } = createMocks({ method: "GET" });
  await handler(req, res);

  expect(daoMock).toHaveBeenCalledTimes(1);
  expect(expectedResponse.matcher).toHaveBeenCalledWith(
    expectedResponse.body,
    res,
  );
}

export async function testFailedGET({
  handler,
  daoMock,
  mockError,
  expectedResponse,
}: ErrorArgs) {
  daoMock.mockRejectedValue(mockError);

  const { req, res } = createMocks({ method: "GET" });
  await handler(req, res);

  expect(daoMock).toHaveBeenCalledTimes(1);
  expect(expectedResponse.matcher).toHaveBeenCalledWith(
    expectedResponse.body,
    res,
  );
}

export async function testUnsupportedMethod({
  handler,
  method,
  expectedResponse,
}: InvalidMethodArgs) {
  const { req, res } = createMocks({ method });
  await handler(req, res);

  expect(expectedResponse.matcher).toHaveBeenCalledWith(
    expectedResponse.body,
    res,
  );
}
