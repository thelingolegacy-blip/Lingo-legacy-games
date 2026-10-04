import 'package:flutter/material.dart';

void main() => runApp(const LingoGamesApp());

class LingoGamesApp extends StatelessWidget {
  const LingoGamesApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Lingo Legacy Games',
    theme: ThemeData.dark(useMaterial3: true),
    home: const GamesHome(),
  );
}

class GamesHome extends StatelessWidget {
  const GamesHome({super.key});
  static const titles = [
    "Tricia's Escape",
    'Doughboy Oasis',
    "Crazy Weasol's",
    'Silly in Philly: The Streets',
    'Jersey Shore & the Undead',
  ];
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('LINGO GAMES')),
    body: ListView.builder(
      padding: const EdgeInsets.all(20),
      itemCount: titles.length,
      itemBuilder: (_, i) => Card(
        child: ListTile(
          contentPadding: const EdgeInsets.all(18),
          title: Text(titles[i]),
          subtitle: const Text('Standalone original IP · Development surface'),
          trailing: const Icon(Icons.arrow_forward_ios),
        ),
      ),
    ),
  );
}
