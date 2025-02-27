package controllers

import javax.inject._
import play.api.mvc._
import services.UserService
import play.api.libs.json.Json

@Singleton
class UserController @Inject()(cc: ControllerComponents, userService: UserService) extends AbstractController(cc) {

  def getAllUsers = Action {
    val users = userService.getAllUsers
    Ok(Json.toJson(users))
  }
}
