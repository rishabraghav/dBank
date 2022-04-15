import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"

actor DBank {
  stable var time = Time.now();
  time := Time.now();
  Debug.print(debug_show(time));
  stable var currentValue: Float = 100;
  currentValue := 1;

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func widthrawl(amount: Float) {
    if(currentValue - amount >= 0) {
      currentValue -= amount;
      Debug.print( debug_show(currentValue));
    } else {
      Debug.print("Amount toooo big");
    }
    
  };

  public query func checkBal(): async Float {
    return currentValue;
  };

  public query func showTime(): async Int {
    var current = Time.now() - time;
    return current/1000000000;
  };

  public  func compound(): async Float {
    var currentTime = Time.now();
    var timeElapsedS = (currentTime - time)/1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    time := currentTime;
    
    return currentValue;
  }
}