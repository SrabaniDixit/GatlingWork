FROM eclipse-temurin:17.0.8_7-jdk

ENV GRADLE_HOME /opt/gradle

RUN apt-get update && apt-get install -y --no-install-recommends \
  unzip=6.0-26ubuntu3.1 \
  curl=7.81.0-1ubuntu1.13  && \
  wget -q -O gradle.zip https://services.gradle.org/distributions/gradle-8.1.1-bin.zip && \
  unzip gradle.zip && \
  rm gradle.zip && \
  mkdir -p /opt && \
  mv gradle-8.1.1 "${GRADLE_HOME}/" && \
  ln -s "${GRADLE_HOME}/bin/gradle" /usr/bin/gradle && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /gatling

COPY src/ /gatling/src
COPY buildSrc /gatling/buildSrc
COPY gradle/ /gatling/gradle
COPY build.gradle /gatling
COPY settings.gradle /gatling
COPY gradlew /gatling

RUN gradle compileGatlingJava
