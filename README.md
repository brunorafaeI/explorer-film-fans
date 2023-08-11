```
src
|-- app
|   |-- controllers
|   |   |-- userController.ts
|   |   |-- postController.ts
|   |   |-- ...
|   |-- services
|   |   |-- userService.ts
|   |   |-- postService.ts
|   |   |-- ...
|   |-- validators
|   |   |-- userValidator.ts
|   |   |-- postValidator.ts
|   |   |-- ...
|-- domain
|   |-- models
|   |   |-- user.ts
|   |   |-- post.ts
|   |   |-- ...
|   |-- repositories
|   |   |-- userRepository.ts
|   |   |-- postRepository.ts
|   |   |-- ...
|-- infra
|   |-- database
|   |   |-- knex
|   |   |   |-- migrations
|   |   |   |   |-- 2023-07-01_create_users_table.ts
|   |   |   |   |-- 2023-07-02_create_posts_table.ts
|   |   |   |   |-- ...
|   |   |   |-- index.ts
|   |   |-- models
|   |   |   |-- userModel.ts
|   |   |   |-- postModel.ts
|   |   |   |-- ...
|   |   |-- repositories
|   |   |   |-- userRepositoryImpl.ts
|   |   |   |-- postRepositoryImpl.ts
|   |   |   |-- ...
|   |-- routes
|   |   |-- userRoutes.ts
|   |   |-- postRoutes.ts
|   |   |-- ...
|   |-- server.ts
|-- usecases
|   |-- createUser.ts
|   |-- createPost.ts
|   |-- ...
```
