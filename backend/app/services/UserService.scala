package services

import javax.inject._
import models.User

@Singleton
class UserService @Inject()() {
  private val users = List(
    User(1, "John Doe", "john@example.com", "hashedpassword"),
    User(2, "Jane Smith", "jane@example.com", "hashedpassword")
  )

  def getAllUsers: List[User] = users
}
