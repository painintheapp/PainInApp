import { Connection } from "typeorm";
import faker from "faker";

import { testConn } from "../../../test-utils/testConn";
import { gCall } from "../../../test-utils/gCall";
import { User } from "../../../entity/User";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const meQuery = `
 {
  me {
    id
    username
    email
  }
}
`;

describe("Me", () => {
  it("get user", async () => {
    const user = await User.create({
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }).save();

    const response = await gCall({
      source: meQuery,
      userId: user.id
    });

    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          username: user.username,
          email: user.email
        }
      }
    });
  });

  it("return null", async () => {
    const response = await gCall({
      source: meQuery
    });

    expect(response).toMatchObject({
      data: {
        me: null
      }
    });
  });
});
