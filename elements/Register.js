class Register{
    prenom= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(0)`
    nom= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(1)`
    email= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(2)`
    phone= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(3)`
    zip= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(4)`
    city= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(5)`
    pwd= `-android uiautomator:new UiSelector().className("android.widget.EditText").instance(6)`
    button_submit= `~Créer mon compte`

}
module.exports=new Register()