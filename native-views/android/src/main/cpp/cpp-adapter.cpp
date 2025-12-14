#include <jni.h>
#include "nativeviewsOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nativeviews::initialize(vm);
}
