package controllers

import javax.inject._
import play.api.mvc._
import services.CourseService
import play.api.libs.json.Json

@Singleton
class CourseController @Inject()(cc: ControllerComponents, courseService: CourseService) extends AbstractController(cc) {

  def getAllCourses = Action {
    val courses = courseService.getAllCourses
    Ok(Json.toJson(courses))
  }
}
