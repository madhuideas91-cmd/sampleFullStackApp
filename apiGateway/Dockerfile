# Stage 1: Build
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/apiGateway-0.0.1-SNAPSHOT.jar app.jar

# Expose gateway port
EXPOSE 8080

# Set default profile
ENV SPRING_PROFILES_ACTIVE=default

ENTRYPOINT ["java", "-jar", "app.jar"]
