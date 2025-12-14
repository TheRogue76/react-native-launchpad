#include <jni.h>
#include "nativemodulesOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nativemodules::initialize(vm);
}
