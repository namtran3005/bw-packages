/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { connectionFactory, ConnectionStatus, IConnection } from '../';

describe('Database connection wrapper', () => {
  let instance: IConnection;

  beforeAll(() => {
    jest.spyOn(mongoose, 'createConnection').mockImplementation(
      () =>
        ({
          // label: url + '_DB',
          // openUri: jest.fn( () => { (instance as any).setStatus(ConnectionStatus.CONNECTED); }),
          on: jest.fn((status, cb) => {
            cb();
          }),
          once: jest.fn(),
        } as any)
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
    instance = connectionFactory(mongoose);
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('Constructor', () => {
    it('Should create a mongoose connection', () => {
      expect(mongoose.createConnection).toBeCalledWith();
      // expect((instance.db as any).label).toBe('MOCK_MONGO_URI_DB');
    });

    it('Should initialize to disconnected status', () => {
      expect(instance.status).toBe(ConnectionStatus.DISCONNECTED);
    });

    // eslint-disable-next-line jest/no-commented-out-tests
    /*  
    it('Should attach event listeners', () => {
      const originalsetStatus = (Connection as any).prototype.setStatus;
      (Connection as any).prototype.setStatus = jest.fn();
      const mockedInstance = new Connection(mongoose);

      expect(mockedInstance.db.on).toHaveBeenCalledTimes(3);

      expect((mockedInstance.db.on as any).mock.calls[0][0]).toBe(
        ConnectionStatus.CONNECTED
      );
      expect((mockedInstance.db.on as any).mock.calls[0][1]).toBeInstanceOf(
        Function
      );
      expect((mockedInstance as any).setStatus.mock.calls[0][0]).toBe(
        ConnectionStatus.CONNECTED
      );

      expect((mockedInstance.db.on as any).mock.calls[1][0]).toBe(
        ConnectionStatus.DISCONNECTED
      );
      expect((mockedInstance.db.on as any).mock.calls[1][1]).toBeInstanceOf(
        Function
      );
      expect((mockedInstance as any).setStatus.mock.calls[1][0]).toBe(
        ConnectionStatus.DISCONNECTED
      );

      (Connection as any).prototype.setStatus = originalsetStatus;
    });
*/
  });

  describe('Instance methods', () => {
    describe('Connection.ensureIsConnected', () => {
      it('Should return a promise which resolves straight away if status is connected', async () => {
        (instance as any).setStatus(ConnectionStatus.CONNECTED);
        expect(await instance.ensureIsConnected('')).toBeUndefined();
      });

      // eslint-disable-next-line jest/no-commented-out-tests
      /*
    it('Should return a promise which resolves as soon as connection is established if not already connected', async () => {
        await instance.ensureIsConnected(process.env.SECRETKEY_MONGO_URL);
        expect((instance as any).db.once.mock.calls[0][0]).toBe(
          ConnectionStatus.CONNECTED
        );
        expect((instance as any).db.once.mock.calls[0][1]).toBeInstanceOf(
          Function
        );
      }); 
*/

      describe('Connection._setStatus', () => {
        it('Should set the status field on an instance', () => {
          (instance as any).setStatus(ConnectionStatus.CONNECTED);
          expect(instance.status).toBe(ConnectionStatus.CONNECTED);
        });
      });
    });
  });
});
