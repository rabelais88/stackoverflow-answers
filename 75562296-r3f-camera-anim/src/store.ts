// mutable store
// this is replacable with zustand
import * as T from 'three';

interface Store {
  targetObj: T.Object3D;
}
const store: Store = {
  targetObj: new T.Object3D(),
};
export default store;
