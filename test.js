function sortObjects(objects, orderRule) {
    const colorOrder = { 'З': 1, 'С': 2, 'К': 3 }; // Определяем порядок цветов

    // Определяем функцию для определения ключа сортировки для каждого объекта
    const keyFunc = obj => colorOrder[obj] || 0;

    // Сортируем объекты с учетом порядка цветов
    const sortedObjects = objects.sort((a, b) => keyFunc(a) - keyFunc(b));

    return sortedObjects;
}

// Прописываем входной набор данных и условия
const inputObjects = ['С', 'С', 'З', 'С', 'К', 'З', 'З', 'З', 'К', 'К', 'С', 'З', 'С', 'С', 'К', 'З'];
const orderRule = 'З < С < К';

// Применяем алгоритм сортировки
const sortedObjects = sortObjects(inputObjects, orderRule);

// Выводим результат
// console.log(sortedObjects);
// Преобразуем массив в строку
const oneString = sortedObjects.join("");
console.log(oneString);

// Проверяем, совпадает ли отсортированная строка с ожидаемым результатом
const expectedOutput = 'ЗЗЗЗЗЗССССССКККК';
if (oneString === expectedOutput) {
    console.log('Test passed: sortObjects correctly sorts objects according to the specified order rule');
} else {
    console.error('Test failed: sortObjects does not correctly sort objects');
}
