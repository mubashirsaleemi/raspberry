cmake_minimum_required(VERSION 3.0)

set(CMAKE_BULD_TYPE DEBUG)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++17")

project(server)
find_package(Boost 1.71.0 REQUIRED)
if(Boost_FOUND)
  include_directories(${Boost_INCLUDE_DIRS})
endif()

add_executable(
  server
  main.cpp
)
