package services

import javax.inject._
import models.Course

@Singleton
class CourseService @Inject()() {
  private val courses = List(
    Course(1, "Scala Basics", "Introduction to Scala"),
    Course(2, "Play Framework", "Building web apps with Play")
  )

  def getAllCourses: List[Course] = courses
}
