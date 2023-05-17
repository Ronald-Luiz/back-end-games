const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS jogos (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    genero TEXT,
    titulo TEXT,
    imagem TEXT,
    link TEXT
  )`);

  console.log('Tabela criada com sucesso.');

  // inserir dados na tabela


  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Resident Evil HD Remaster', 'Survival Horror', 'Resident Evil HD Remaster', '/Banco/jogos img/Resident Evil HD Remaster.jpg', 'https://1fichier.com/?z4llduqjui05tbffazfr')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Resident Evil 4 Remake', 'Survival Horror', 'Resident Evil 4 Remake', '/Banco/jogos img/COVER-RESIDENT-EVIL-4-REMAKE-GAME.jpg', 'https://example.com/resident-evil-4-remake')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('A Plague Tale Requiem', 'Action-Adventure', 'A Plague Tale Requiem', '/Banco/jogos img/A Plague Tale Requiem.jpeg', 'https://example.com/a-plague-tale-requiem')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('SpongeBob SquarePants: The Cosmic Shake', 'Platformer', 'SpongeBob SquarePants: The Cosmic Shake', '/Banco/jogos img/SpongeBob SquarePants The Cosmic Shake.jpeg', 'https://example.com/spongebob-squarepants-the-cosmic-shake')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Quantum Break', 'Action-Adventure', 'Quantum Break', '/Banco/jogos img/quantum break.jpg', 'https://example.com/quantum-break')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Watch Dogs: Legion', 'Action-Adventure', 'Watch Dogs: Legion', '/Banco/jogos img/watch dogs legion.jpg', 'https://example.com/watch-dogs-legion')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Watch Dogs 2', 'Action-Adventure', 'Watch Dogs 2', '/Banco/jogos img/Watch_Dogs_2_cover.png', 'https://example.com/watch-dogs-2')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Watch Dogs', 'Action-Adventure', 'Watch Dogs', '/Banco/jogos img/watch dogs.jpg', 'https://example.com/watch-dogs')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Euro Truck Simulator 2', 'Simulation', 'Euro Truck Simulator 2', '/Banco/jogos img/euro truck simulator 2.jpg', 'https://example.com/euro-truck-simulator-2')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Horizon Zero Dawn', 'Action-Adventure', 'Horizon Zero Dawn', '/Banco/jogos img/Horizon_Zero_Dawn_capa.png', 'https://example.com/horizon-zero-dawn')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Half-Life: Alyx (NoVR Mod)', 'Action-Adventure', 'Half-Life: Alyx (NoVR Mod)', '/Banco/jogos img/Half-Life_Alyx_Cover_Art.jpg', 'https://example.com/horizon-zero-dawn')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Dark Souls III', 'Action RPG', 'Dark Souls III', '/Banco/jogos img/Dark Souls III.png', 'https://example.com/dark-souls-iii')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('The Evil Within 2', 'Survival Horror', 'The Evil Within 2', '/Banco/jogos img/the evil within 2.jpg', 'https://example.com/the-evil-within-2')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Rise of the Tomb Raider', 'Action-Adventure', 'Rise of the Tomb Raider', '/Banco/jogos img/RotTR_boxart.jpg', 'https://example.com/rise-of-the-tomb-raider')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Shadow of the Tomb Raider', 'Action-Adventure', 'Shadow of the Tomb Raider', '/Banco/jogos img/Shadow_of_the_Tomb_Raider_capa.png', 'https://example.com/shadow-of-the-tomb-raider')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Grand Theft Auto V', 'Action-Adventure', 'Grand Theft Auto V', '/Banco/jogos img/Grand_Theft_Auto_V_capa.png', 'https://example.com/grand-theft-auto-v')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Grand Theft Auto IV', 'Action-Adventure', 'Grand Theft Auto IV', '/Banco/jogos img/gta iv.jpg', 'https://example.com/grand-theft-auto-iv')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Zelda: Tears Of The Kingdom', 'Action-Adventure', 'Zelda: Tears Of The Kingdom', '/Banco/jogos img/zelda tears of the kingdom.jpg', 'https://example.com/zelda-tears-of-the-kingdom')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Mafia: Definitive Edition', 'Action-Adventure', 'Mafia: Definitive Edition', '/Banco/jogos img/Mafia_Definitive_Edition.jpg', 'https://example.com/mafia-definitive-edition')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Dragon Ball: Kakarot', 'Action RPG', 'Dragon Ball: Kakarot', '/Banco/jogos img/dragon ball kakarot.jpg', 'https://example.com/dragon-ball-kakarot')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Atomic Heart', 'First-Person Shooter', 'Atomic Heart', '/Banco/jogos img/atomic heart.jpg', 'https://example.com/atomic-heart')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('The last of Us', 'Action-Adventure', 'The last of Us', '/Banco/jogos img/The_Last_of_Us_capa.png', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Alex Kidd in Miracle World DX', 'Action-Adventure', 'Alex Kidd in Miracle World DX', '/Banco/jogos img/alex kidd.jpg', 'https://example.com/alexkid')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('God of War', 'Action-Adventure', 'God of War', '/Banco/jogos img/god of war.jpeg', 'https://example.com/god')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Assassins Creed Valhalla', 'Action-Adventure', 'Assassins Creed Valhalla', '/Banco/jogos img/assassins creed valhalla.jpg', 'https://example.com/ac')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Marvels Spider-Man', 'Action-Adventure', 'Marvels Spider-Man', '/Banco/jogos img/marvel spider man.jpeg', 'https://example.com/spider')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Marvels Spider-Man: Miles Morales', 'Action-Adventure', 'Marvels Spider-Man: Miles Morales', '/Banco/jogos img/marvel spider man miles morales.jpeg', 'https://example.com/spider2')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Hogwarts', 'Action-Adventure', 'Hogwarts', '/Banco/jogos img/hogwarts.jpeg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('UNCHARTED™: Legacy of Thieves Collection', 'Action-Adventure', 'UNCHARTED™: Legacy of Thieves Collection', '/Banco/jogos img/uncarted.jpeg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Dying Light 2: Stay Human', 'Action-Adventure', 'Dying Light 2: Stay Human', '/Banco/jogos img/dying light 2.jpeg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Forza Horizon 5', 'Action-Adventure', 'Forza Horizon 5', '/Banco/jogos img/Forza Horizon 5.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Resident Evil Village', 'Action-Adventure', 'Resident Evil Village', '/Banco/jogos img/Resident_Evil_Village.png', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Resident Evil 7', 'Action-Adventure', 'Resident Evil 7', '/Banco/jogos img/resident evil 7.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Elden Ring', 'Action-Adventure', 'Elden Ring', '/Banco/jogos img/Elden Ring.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('The Witcher 3: Wild Hunt', 'Action-Adventure', 'The Witcher 3: Wild Hunt', '/Banco/jogos img/The Witcher 3.png', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Evil West', 'Action-Adventure', 'Evil West', '/Banco/jogos img/Evil West.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Bioshock: Infinite', 'Action-Adventure', 'Bioshock: Infinite', '/Banco/jogos img/Bioshock Infinite.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Cyberpunk 2077', 'Action-Adventure', 'Cyberpunk 2077', '/Banco/jogos img/Cyberpunk 2077.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Metro Exodus', 'Action-Adventure', 'Metro Exodus', '/Banco/jogos img/Metro Exodus.jpeg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Crash Bandicoot Remastered', 'Action-Adventure', 'Crash Bandicoot Remastered', '/Banco/jogos img/crash bandicoot remake.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Crash Bandicoot 4: Its About Time', 'Action-Adventure', 'Crash Bandicoot 4: Its About Time', '/Banco/jogos img/crash bandicoot 4.jpg', 'https://example.com/the-last-of-us')");
  // db.run("INSERT INTO jogos (nome, genero, titulo, imagem, link) VALUES ('Call of Duty: Modern Warfare Remastered', 'Action-Adventure', 'Call of Duty: Modern Warfare Remastered', '/Banco/jogos img/Call of Duty Modern Warfare Remastered.jpg', 'https://example.com/the-last-of-us')");


  console.log('Dados inseridos com sucesso!');
});

module.exports = db;
