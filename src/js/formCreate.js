const t = `<!DOCTYPE html> 
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Список задач</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
  <link rel="stylesheet" href="task.css">
</head>
<body>
    <header class="header">
        <div class="logo__container">
          <a href="https://netology.ru/" class="logo__link"></a>
        </div>
        <h1 class="header__title">
            Домашнее задание к занятию 2.3 «Изменение структуры HTML-документа». Простой список дел.
        </h1>
    </header>
    <main class="content">
        <div class="card">
            <div class="tasks" id="tasks">
                <form class="tasks__control" id="tasks__form">
                    <input type="text" class="tasks__input" id="task__input" placeholder="Введите название новой задачи" minlength="5" maxlength="80"></input>
                    <button class="tasks__add" id="tasks__add">Добавить</button>
                </form>
                <div class="tasks__list" id="tasks__list">
                </div>
            </div>
        </div>
    </main>
    
    <script src="task.js"></script>
</body>
</html>`;
console.log(t);
/*
<div class="card">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
*/
