import {
  rollback,
  insert,
  commit,
  startTransaction,
  select
} from '@evershop/postgres-query-builder';
import { getConnection } from '../../../../lib/postgres/connection.js';
import {
  OK,
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD
} from '../../../../lib/util/httpStatus.js';

export default async (request, response, next) => {
  const connection = await getConnection();
  await startTransaction(connection);
  const { name } = request.body;
  try {
    const method = await select()
      .from('shipping_method')
      .where('name', '=', name)
      .load(connection);

    if (method) {
      await rollback(connection);
      response.status(INVALID_PAYLOAD);
      response.json({
        error: {
          status: INVALID_PAYLOAD,
          message: 'Method name already exists'
        }
      });
      return;
    }

    const newMethodResult = await insert('shipping_method')
      .given({
        name
      })
      .execute(connection);
    const newMethod = await select()
      .from('shipping_method')
      .where('shipping_method_id', '=', newMethodResult.insertId)
      .load(connection);
    await commit(connection);
    response.status(OK);
    response.json({
      data: newMethod
    });
  } catch (e) {
    await rollback(connection);
    response.status(INTERNAL_SERVER_ERROR);
    response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: e.message
      }
    });
  }
};
