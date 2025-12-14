package com.margelo.nitro.nativemodules
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class NativeModules : HybridNativeModulesSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
