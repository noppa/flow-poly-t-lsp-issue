// @flow
class A<Props, State = any> {

}

class B extends A<any> {
  foo() {
    return 3
  }

  bar() {
    return this.foo()
  }
}