import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { handler } from '../handler.js';

chai.use(chaiAsPromised);
const assert = chai.assert;
