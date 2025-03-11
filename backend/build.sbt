name := "LMSBackend"

version := "1.0"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)

scalaVersion := "2.13.8"

libraryDependencies ++= Seq(
  guice,
  "mysql" % "mysql-connector-java" % "8.0.28",
  "com.typesafe.play" %% "play-json" % "2.9.2",
  "com.typesafe.play" %% "play-slick" % "5.0.0", // Enables Play & Slick integration
  "com.typesafe.play" %% "play-slick-evolutions" % "5.0.0", // Database migrations
  "com.typesafe.play" %% "play-logback" % "2.9.2" // Logging support
)

dependencyOverrides += "org.scala-lang.modules" %% "scala-xml" % "2.0.1"

// Enable Play's routes generator (ensures proper URL routing)
routesGenerator := InjectedRoutesGenerator
