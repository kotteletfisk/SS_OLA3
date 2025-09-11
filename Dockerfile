FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests package

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app
RUN mkdir -p /data

COPY --from=build /app/target/*.jar app.jar

EXPOSE 7000
ENTRYPOINT ["java","-jar","app.jar"]
