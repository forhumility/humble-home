/**
 * @Author       : Humility
 * @Date         : 2023-08-10 17:25:03
 * @LastEditTime : 2023-08-14 09:36:54
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\components\UnityView\unityBridge.ts
 * @Description  :
 */
export default () => {
  /********************************** 方式一 **************************************
   * 统一监听unityCallFunction事件，进行方法调用
   */
  window.addEventListener("unityCallFunction", (event: Event) => {
    const customEvent = event as CustomEvent<any>;
    const { fun, parma } = customEvent.detail;
    const func = window.unityBridge[fun];
    if (func) {
      func(parma);
    }
  });
  /********************************** 方式二 **************************************
   * 分别定义事件进行方法调用
   */
  // window.addEventListener("setSceneLoadState", (event) => {
  //   const customEvent = event as CustomEvent<any>;
  //   const { detail } = customEvent;
  //   window.unityBridge.SetSceneLoadState(detail);
  // });
  // window.addEventListener("setHoverDeviceID", (event) => {
  //   const customEvent = event as CustomEvent<any>;
  //   const { detail } = customEvent;
  //   window.unityBridge.SetHoverDeviceID(detail);
  // });
  // window.addEventListener("setDeviceID", (event) => {
  //   const customEvent = event as CustomEvent<any>;
  //   const { detail } = customEvent;
  //   window.unityBridge.SetDeviceID(detail);
  // });

  /*************************** 定义Unity各个事件将触发的方法 *****************************
   * Unity中的规范 tip：方法名为大驼峰命名法
   */
  const unityBridge = {
    SetSceneLoadState: (state: string) => {
      console.log("SetSceneLoadState", state);
    },
    SetSceneName: (name: string) => {
      console.log("SetSceneName", name);
    },
    SetHoverDeviceID: (id: string) => {
      console.log("SetHoverDeviceID", id);
    },
    SetDeviceID: (id: string) => {
      console.log("SetDeviceID", id);
    },
  };
  if (!window.unityBridge) {
    window.unityBridge = unityBridge;
  }
};
