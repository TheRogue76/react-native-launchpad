import { container } from '../../libs/Core/DI.ts';
import { OrderRepo, OrderRepoImpl } from './OrderRepo.ts';
import { ServiceIdentifier } from '@inversifyjs/common';

export const orderRepoSI: ServiceIdentifier<OrderRepo> = Symbol.for('orderRepo')

container.bind<OrderRepo>(orderRepoSI).to(OrderRepoImpl).inSingletonScope()