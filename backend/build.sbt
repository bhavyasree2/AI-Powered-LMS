name := "LMSBackend"

version := "1.0"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)

scalaVersion := "2.13.8"

libraryDependencies ++= Seq(
  guice,
  "mysql" % "mysql-connector-java" % "8.0.28",
  "com.typesafe.play" %% "play-json" % "2.9.2"
)
