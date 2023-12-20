/* eslint-disable react/no-unescaped-entities */

import styles from './TextContainer.module.css';

const TextContainer = () => {
	return (
		<div className={styles.textContainer}>
			<p>
				Добро пожаловать на страницу "О проекте" нашего веб-приложения.
				Этот проект был создан как часть практической работы по курсу
				"Технологии разработки веб-приложений", который погружает
				студентов в мир современных технологий и практик
				программирования. Целью этого проекта было разработать
				полнофункциональное веб-приложение, демонстрирующее глубокие
				знания и практические навыки работы с двумя ведущими
				технологиями: React и Node.js. <br/>
        <br/>
        React, библиотека JavaScript для
				создания пользовательских интерфейсов, был выбран за его
				декларативный подход, эффективность и гибкость. С его помощью мы
				смогли построить интерактивные, динамичные страницы, которые
				автоматически реагируют на изменения данных. Это не только
				улучшает пользовательский опыт, но и значительно упрощает
				процесс разработки. <br/>
        <br/>
        Node.js, с другой стороны, используется в
				качестве серверной платформы. Его несинхронная,
				событийно-ориентированная архитектура обеспечивает эффективную
				обработку запросов и быстродействие серверной части нашего
				приложения. Сочетание Node.js и React позволяет создавать
				масштабируемые и быстрые веб-приложения, способные обрабатывать
				большие объемы данных и одновременные пользовательские сессии
				без потери производительности. <br/>
        <br/>
        В этом проекте мы также активно
				использовали возможности react-router для навигации по
				приложению без перезагрузки страниц. React-router — это
				стандартный маршрутизатор в экосистеме React, который позволяет
				нам легко переключаться между различными страницами, сохраняя
				при этом пользовательский интерфейс консистентным и быстрым.
				Благодаря декларативной настройке маршрутов, мы можем эффективно
				управлять состоянием приложения и предоставлять пользователям
				плавный и интуитивно понятный опыт навигации. <br/>
        <br/>
        Разработка
				веб-приложения — это не только процесс кодирования. Это
				творческий процесс, в котором концепции дизайна,
				пользовательский опыт и производительность объединяются для
				создания чего-то уникального и ценного. Мы стремились создать не
				просто функциональный инструмент, но и платформу, которая была
				бы приятной в использовании. <br/>
        <br/>
        Мы надеемся, что вы найдете наше
				приложение полезным и информативным. Оно является результатом
				многих часов упорного труда, обширных исследований и глубокого
				обучения. Этот проект — свидетельство нашей страсти к разработке
				веб-технологий и нашему стремлению к совершенству. <br/>
        <br/>
        Спасибо за внимание к нашему проекту!
			</p>
		</div>
	);
};

export default TextContainer;
