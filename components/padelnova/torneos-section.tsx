"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Calendar, Users, Award, Clock, Star, TrendingUp, ChevronRight, Zap, Filter, X, FileText, Target, Play, Medal } from "lucide-react";
import Image from "next/image";

export function TorneosSection() {
  const [selectedTab, setSelectedTab] = useState<"activos" | "proximos" | "finalizados">("activos");
  const [selectedTournament, setSelectedTournament] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedClassification, setSelectedClassification] = useState<any>(null);
  const [infoModalTab, setInfoModalTab] = useState<"info" | "classification" | "matches" | "rules">("info");
  const [showRegistrationModal, setShowRegistrationModal] = useState<any>(null);

  const activeTournaments = [
    {
      id: 1,
      name: "Torneo de Invierno 2024",
      category: "A",
      format: "Doble Mixto",
      participants: 24,
      registered: 18,
      startDate: "15 Ene",
      endDate: "28 Ene",
      prizes: "1.500€",
      status: "Inscripciones cerradas",
      color: "blue",
      description: "El torneo más prestigioso de la temporada de invierno. Compite contra los mejores jugadores del club en una experiencia única.",
      fullStartDate: "15 de Enero 2024",
      fullEndDate: "28 de Enero 2024",
      location: "Padel Nova, Pistas 1-6",
      schedule: "Horarios flexibles de 10:00 a 22:00",
      rules: [
        "Categoría mixta obligatoria",
        "Sistema de eliminatoria directa",
        "Puntuación standard World Padel Tour",
        "Árbitro oficial en partidos de cuartos en adelante"
      ],
      prizesDetail: {
        primer: "750€",
        segundo: "450€",
        tercero: "300€"
      },
      classification: "Sistema de puntos: 3 pts victoria, 1 pt derrota, clasificación por número de victorias",
      standings: [
        { position: 1, team: "García & López", points: 15, matches: 6, wins: 5, losses: 1, setsWon: 12, setsLost: 4 },
        { position: 2, team: "Martínez & Sánchez", points: 13, matches: 6, wins: 4, losses: 2, setsWon: 10, setsLost: 6 },
        { position: 3, team: "Ruiz & Torres", points: 11, matches: 6, wins: 3, losses: 3, setsWon: 8, setsLost: 9 },
        { position: 4, team: "Fernández & Moreno", points: 10, matches: 6, wins: 3, losses: 3, setsWon: 9, setsLost: 8 },
        { position: 5, team: "Rodríguez & Jiménez", points: 7, matches: 6, wins: 2, losses: 4, setsWon: 6, setsLost: 11 },
        { position: 6, team: "Pérez & Gómez", points: 5, matches: 6, wins: 1, losses: 5, setsWon: 5, setsLost: 12 }
      ],
      pastMatches: [
        { date: "15 Ene", time: "10:00", team1: "García & López", score1: "6", score2: "2", team2: "Pérez & Gómez", court: "Pista 1" },
        { date: "15 Ene", time: "11:30", team1: "Martínez & Sánchez", score1: "6", score2: "3", team2: "Ruiz & Torres", court: "Pista 2" },
        { date: "16 Ene", time: "14:00", team1: "Fernández & Moreno", score1: "4", score2: "6", team2: "García & López", court: "Pista 1" },
        { date: "18 Ene", time: "16:30", team1: "Rodríguez & Jiménez", score1: "3", score2: "6", team2: "Martínez & Sánchez", court: "Pista 3" }
      ],
      upcomingMatches: [
        { date: "22 Ene", time: "10:00", team1: "García & López", team2: "Ruiz & Torres", court: "Pista 1", round: "Semifinal" },
        { date: "22 Ene", time: "12:00", team1: "Martínez & Sánchez", team2: "Fernández & Moreno", court: "Pista 2", round: "Semifinal" },
        { date: "26 Ene", time: "17:00", team1: "TBD", team2: "TBD", court: "Pista Principal", round: "Final" }
      ]
    },
    {
      id: 2,
      name: "Copa de Oro",
      category: "B",
      format: "Doble Masculino",
      participants: 16,
      registered: 12,
      startDate: "20 Ene",
      endDate: "25 Ene",
      prizes: "800€",
      status: "Inscripciones cerradas",
      color: "purple",
      description: "Una competición intensiva para jugadores de nivel intermedio. Formato reducido para máxima emoción.",
      fullStartDate: "20 de Enero 2024",
      fullEndDate: "25 de Enero 2024",
      location: "Padel Nova, Pistas 3-5",
      schedule: "10:00 - 14:00 y 16:00 - 20:00",
      rules: [
        "Solo duplas masculinas",
        "Nivel B requerido",
        "Formato de eliminatoria directa",
        "Mejor de 3 sets"
      ],
      prizesDetail: {
        primer: "450€",
        segundo: "250€",
        tercero: "100€"
      },
      classification: "Sistema de grupos: 4 grupos de 4, semifinales y final",
      standings: [
        { position: 1, team: "Hernández & Castro", points: 12, matches: 5, wins: 4, losses: 1, setsWon: 10, setsLost: 3 },
        { position: 2, team: "Díaz & Morales", points: 10, matches: 5, wins: 3, losses: 2, setsWon: 8, setsLost: 5 },
        { position: 3, team: "González & Romero", points: 9, matches: 5, wins: 3, losses: 2, setsWon: 7, setsLost: 7 },
        { position: 4, team: "Vargas & Silva", points: 7, matches: 5, wins: 2, losses: 3, setsWon: 6, setsLost: 8 },
        { position: 5, team: "Ramírez & Ortega", points: 4, matches: 5, wins: 1, losses: 4, setsWon: 4, setsLost: 11 }
      ],
      pastMatches: [
        { date: "20 Ene", time: "10:00", team1: "Hernández & Castro", score1: "6", score2: "1", team2: "Ramírez & Ortega", court: "Pista 4" },
        { date: "21 Ene", time: "11:00", team1: "Díaz & Morales", score1: "6", score2: "3", team2: "González & Romero", court: "Pista 3" },
        { date: "23 Ene", time: "14:00", team1: "Vargas & Silva", score1: "3", score2: "6", team2: "Hernández & Castro", court: "Pista 4" }
      ],
      upcomingMatches: [
        { date: "24 Ene", time: "10:00", team1: "Hernández & Castro", team2: "Díaz & Morales", court: "Pista Principal", round: "Final" }
      ]
    },
  ];

  const upcomingTournaments = [
    {
      id: 3,
      name: "Torneo del Verano",
      category: "A",
      format: "Doble Mixto",
      startDate: "1 Feb",
      registrationEnds: "30 Ene",
      prizes: "2.000€",
      color: "green",
      description: "El torneo más esperado del verano. Una competición de alto nivel con los mejores jugadores del club durante los meses estivales.",
      fullStartDate: "1 de Febrero 2024",
      fullEndDate: "15 de Febrero 2024",
      location: "Padel Nova, Todas las pistas",
      schedule: "Horarios flexibles de 9:00 a 23:00",
      rules: [
        "Categoría mixta obligatoria",
        "Formato de eliminatoria directa",
        "Mínimo 6 partidos garantizados",
        "Puntuación standard World Padel Tour",
        "Árbitro oficial en todos los encuentros"
      ],
      prizesDetail: {
        primer: "1.000€",
        segundo: "600€",
        tercero: "400€"
      },
      classification: "Sistema de grupos: 6 grupos de 4, play-offs, semifinales y final",
      participants: 32,
      registered: 8
    },
    {
      id: 4,
      name: "Campeonato de Clubes",
      category: "B",
      format: "Individual",
      startDate: "10 Feb",
      registrationEnds: "5 Feb",
      prizes: "1.200€",
      color: "indigo",
      description: "Competición individual donde cada jugador demuestra su nivel. Perfecto para aquellos que buscan desafíos personales.",
      fullStartDate: "10 de Febrero 2024",
      fullEndDate: "20 de Febrero 2024",
      location: "Padel Nova, Pistas 1-4",
      schedule: "11:00 - 15:00 y 17:00 - 21:00",
      rules: [
        "Formato individual",
        "Nivel B recomendado",
        "Sistema de liga + play-offs",
        "Puntuación estándar",
        "Árbitro en partidos de play-offs"
      ],
      prizesDetail: {
        primer: "600€",
        segundo: "350€",
        tercero: "250€"
      },
      classification: "Liga de todos contra todos + play-offs para los 8 mejores",
      participants: 20,
      registered: 5
    },
  ];

  const finishedTournaments = [
    {
      id: 5,
      name: "Torneo de Navidad",
      category: "A",
      format: "Doble Mixto",
      endDate: "20 Dic 2023",
      winner: "Ana García & Juan Pérez",
      prizes: "1.500€",
      color: "red",
      description: "Una competición festiva que marcó el final de temporada. Grandes momentos y partidos emocionantes.",
      fullStartDate: "1 de Diciembre 2023",
      fullEndDate: "20 de Diciembre 2023",
      location: "Padel Nova, Pistas 1-6",
      schedule: "10:00 - 14:00 y 16:00 - 22:00",
      rules: [
        "Categoría mixta obligatoria",
        "Sistema de eliminatoria directa",
        "Puntuación standard World Padel Tour",
        "Árbitro oficial en todos los encuentros"
      ],
      prizesDetail: {
        primer: "750€",
        segundo: "450€",
        tercero: "300€"
      },
      classification: "Sistema de puntos: 3 pts victoria, 1 pt derrota",
      finalStandings: [
        { position: 1, team: "Ana García & Juan Pérez", points: 18, wins: 6, losses: 0, setsWon: 14, setsLost: 3, matches: 6 },
        { position: 2, team: "María López & Carlos Ruiz", points: 15, wins: 5, losses: 1, setsWon: 12, setsLost: 5, matches: 6 },
        { position: 3, team: "Sofía Martínez & David Torres", points: 12, wins: 4, losses: 2, setsWon: 10, setsLost: 8, matches: 6 },
        { position: 4, team: "Carmen Díaz & Pablo Soto", points: 9, wins: 3, losses: 3, setsWon: 9, setsLost: 10, matches: 6 },
        { position: 5, team: "Isabel Vargas & Miguel Herrera", points: 6, wins: 2, losses: 4, setsWon: 7, setsLost: 11, matches: 6 },
        { position: 6, team: "Laura Fernández & Sergio Ramos", points: 3, wins: 1, losses: 5, setsWon: 4, setsLost: 13, matches: 6 }
      ],
      pastMatches: [
        { date: "1 Dic", time: "10:00", team1: "Ana García & Juan Pérez", score1: "6", score2: "1", team2: "Laura Fernández & Sergio Ramos", court: "Pista 1" },
        { date: "1 Dic", time: "12:00", team1: "María López & Carlos Ruiz", score1: "6", score2: "3", team2: "Isabel Vargas & Miguel Herrera", court: "Pista 2" },
        { date: "3 Dic", time: "14:00", team1: "Sofía Martínez & David Torres", score1: "6", score2: "4", team2: "Carmen Díaz & Pablo Soto", court: "Pista 1" },
        { date: "5 Dic", time: "10:00", team1: "Ana García & Juan Pérez", score1: "6", score2: "2", team2: "Isabel Vargas & Miguel Herrera", court: "Pista 3" },
        { date: "5 Dic", time: "12:00", team1: "María López & Carlos Ruiz", score1: "6", score2: "4", team2: "Carmen Díaz & Pablo Soto", court: "Pista 2" },
        { date: "8 Dic", time: "16:00", team1: "Ana García & Juan Pérez", score1: "6", score2: "3", team2: "Sofía Martínez & David Torres", court: "Pista Principal" },
        { date: "10 Dic", time: "11:00", team1: "María López & Carlos Ruiz", score1: "6", score2: "2", team2: "Carmen Díaz & Pablo Soto", court: "Pista 1" },
        { date: "12 Dic", time: "14:00", team1: "Sofía Martínez & David Torres", score1: "6", score2: "1", team2: "Isabel Vargas & Miguel Herrera", court: "Pista 2" },
        { date: "15 Dic", time: "16:00", team1: "Ana García & Juan Pérez", score1: "6", score2: "4", team2: "Carmen Díaz & Pablo Soto", court: "Pista Principal" },
        { date: "17 Dic", time: "10:00", team1: "María López & Carlos Ruiz", score1: "4", score2: "6", team2: "Ana García & Juan Pérez", court: "Pista Principal" },
        { date: "20 Dic", time: "17:00", team1: "Ana García & Juan Pérez", score1: "6", score2: "3", team2: "María López & Carlos Ruiz", court: "Pista Principal", round: "Final" }
      ],
      upcomingMatches: []
    },
  ];

  return (
    <section id="torneos" className="pt-8 pb-8 bg-[#D6E826] relative z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 -mt-36">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 max-w-3xl mb-6 inline-block -mt-28">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Torneos y{" "}
              <span className="text-gray-900">competiciones.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-900 max-w-3xl text-left ml-8">
            Registro online, clasificaciones en tiempo real y resultados automáticos.
          </p>
        </div>

        {/* Main Tournament Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mb-12"
        >
          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[
              { id: "activos", label: "En curso", count: 2 },
              { id: "proximos", label: "Próximos", count: 2 },
              { id: "finalizados", label: "Finalizados", count: 1 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedTab === tab.id
                    ? "bg-[#D6E826] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Tournament Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {selectedTab === "activos" && activeTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`bg-gradient-to-br from-blue-500 to-blue-600 p-8 relative min-h-[250px]`}>
                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Trophy className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">{tournament.category}</span>
                      </div>
                      <div className="text-white/80 text-sm font-medium">{tournament.status}</div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-2">{tournament.name}</h3>
                    <p className="text-white/90 text-lg mb-6">{tournament.format}</p>
                    
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{tournament.startDate} - {tournament.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{tournament.prizes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Participantes</span>
                    </div>
                    <span className="text-2xl font-black text-gray-900">
                      {tournament.registered}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: '100%' }}
                    />
                  </div>
                  
                  <button 
                    onClick={() => setSelectedTournament(tournament)}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 group mb-3"
                  >
                    Ver información
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    onClick={() => setSelectedClassification(tournament)}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Clasificación
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}

            {selectedTab === "proximos" && upcomingTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200"
              >
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">{tournament.category}</span>
                    </div>
                    <div className="text-white/80 text-sm font-medium">Inscripciones abiertas</div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2">{tournament.name}</h3>
                  <p className="text-white/90 text-lg mb-6">{tournament.format}</p>
                  
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Inicio: {tournament.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{tournament.prizes}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Inscripciones abiertas hasta</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {tournament.registrationEnds}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedTournament(tournament)}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 group mb-3"
                  >
                    Ver información
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    onClick={() => setShowRegistrationModal(tournament)}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    Inscribirse
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}

            {selectedTab === "finalizados" && finishedTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden opacity-80 hover:opacity-100"
              >
                <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Trophy className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">{tournament.category}</span>
                    </div>
                    <div className="text-white/80 text-sm font-medium">Finalizado</div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2">{tournament.name}</h3>
                  <p className="text-white/90 text-lg mb-6">{tournament.format}</p>
                  
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Finalizado: {tournament.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{tournament.prizes}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#D6E826]" />
                      <span className="text-gray-700 font-medium">Campeones</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 text-right max-w-[60%]">
                      {tournament.winner}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedTournament(tournament)}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 group mb-3"
                  >
                    Ver información
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group">
                    Ver resultados
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {selectedTournament && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedTournament(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 relative">
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                  <span className="text-white font-semibold">{selectedTournament.category}</span>
                </div>
                
                <h2 className="text-4xl font-black text-white mb-2">{selectedTournament.name}</h2>
                <p className="text-white/90 text-xl mb-6">{selectedTournament.format}</p>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 px-8 pt-4">
                <div className="flex gap-2">
                  {[
                    { id: "info", label: "Información", icon: FileText },
                    { id: "classification", label: "Clasificación", icon: TrendingUp },
                    { id: "matches", label: "Partidos", icon: Calendar },
                    { id: "rules", label: "Reglamento", icon: Play }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setInfoModalTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-t-xl font-semibold transition-all duration-300 ${
                        infoModalTab === tab.id
                          ? "bg-white text-[#D6E826] border-t border-l border-r border-gray-200"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                {infoModalTab === "info" && (
                  <div className="space-y-8">
                    {/* Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-[#D6E826]" />
                        Descripción
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{selectedTournament.description}</p>
                    </div>

                    {/* Dates & Location */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <Calendar className="w-8 h-8 text-[#D6E826] mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Fechas</h4>
                        <p className="text-gray-600">{selectedTournament.fullStartDate} - {selectedTournament.fullEndDate}</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <Target className="w-8 h-8 text-[#D6E826] mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Ubicación</h4>
                        <p className="text-gray-600">{selectedTournament.location}</p>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <Clock className="w-8 h-8 text-[#D6E826] mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                      <p className="text-gray-600">{selectedTournament.schedule}</p>
                    </div>

                    {/* Prizes */}
                    {selectedTournament.prizesDetail && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Award className="w-6 h-6 text-[#D6E826]" />
                          Premios
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl text-center">
                            <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-1">1º Lugar</p>
                            <p className="text-3xl font-black text-yellow-600">{selectedTournament.prizesDetail.primer}</p>
                          </div>
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center">
                            <Award className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-1">2º Lugar</p>
                            <p className="text-3xl font-black text-gray-700">{selectedTournament.prizesDetail.segundo}</p>
                          </div>
                          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl text-center">
                            <Medal className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-1">3º Lugar</p>
                            <p className="text-3xl font-black text-amber-600">{selectedTournament.prizesDetail.tercero}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Classification */}
                    {selectedTournament.classification && (
                      <div className="bg-gradient-to-r from-[#D6E826]/10 to-transparent p-6 rounded-2xl border-2 border-[#D6E826]/20">
                        <Star className="w-8 h-8 text-[#D6E826] mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Sistema de Clasificación</h4>
                        <p className="text-gray-700">{selectedTournament.classification}</p>
                      </div>
                    )}
                  </div>
                )}

                {infoModalTab === "classification" && (selectedTournament.standings || selectedTournament.finalStandings) && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-4 px-4 font-semibold text-gray-900">Pos</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-900">Equipo</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">Pts</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">PJ</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">G</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">P</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">Sets +</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">Sets -</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedTournament.standings || selectedTournament.finalStandings || []).map((standing: any, idx: number) => (
                          <tr
                            key={idx}
                            className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                              idx < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                            }`}
                          >
                            <td className="py-4 px-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${
                                idx === 0 ? 'bg-yellow-500 text-white' :
                                idx === 1 ? 'bg-gray-400 text-white' :
                                idx === 2 ? 'bg-amber-600 text-white' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {standing.position}
                              </div>
                            </td>
                            <td className="py-4 px-4 font-semibold text-gray-900">{standing.team}</td>
                            <td className="py-4 px-4 text-center font-bold text-gray-900">{standing.points}</td>
                            <td className="py-4 px-4 text-center text-gray-600">{standing.matches}</td>
                            <td className="py-4 px-4 text-center text-green-600 font-semibold">{standing.wins}</td>
                            <td className="py-4 px-4 text-center text-red-600 font-semibold">{standing.losses}</td>
                            <td className="py-4 px-4 text-center text-gray-600">{standing.setsWon}</td>
                            <td className="py-4 px-4 text-center text-gray-600">{standing.setsLost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {infoModalTab === "matches" && (
                  <div className="space-y-6">
                    {/* Upcoming Matches */}
                    {selectedTournament.upcomingMatches && selectedTournament.upcomingMatches.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Clock className="w-6 h-6 text-[#D6E826]" />
                          Próximos Partidos
                        </h3>
                        <div className="grid gap-4">
                          {selectedTournament.upcomingMatches.map((match: any, idx: number) => (
                            <div key={idx} className="bg-gradient-to-r from-blue-50 to-transparent border-2 border-blue-200 rounded-2xl p-6">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-5 h-5 text-blue-600" />
                                  <span className="font-semibold text-gray-900">{match.date}</span>
                                  <span className="text-blue-600 font-bold">{match.time}</span>
                                </div>
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{match.round}</span>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4 mb-3">
                                <div className="flex items-center gap-2">
                                  <Users className="w-5 h-5 text-gray-600" />
                                  <span className="font-semibold text-gray-900">{match.team1}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-5 h-5 text-gray-600" />
                                  <span className="font-semibold text-gray-900">{match.team2}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-gray-600" />
                                <span className="text-gray-600">{match.court}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Past Matches */}
                    {selectedTournament.pastMatches && selectedTournament.pastMatches.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Award className="w-6 h-6 text-[#D6E826]" />
                          Partidos Anteriores
                        </h3>
                        <div className="grid gap-4">
                          {selectedTournament.pastMatches.map((match: any, idx: number) => (
                            <div key={idx} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-5 h-5 text-gray-600" />
                                  <span className="font-semibold text-gray-900">{match.date}</span>
                                  <span className="text-gray-600">{match.time}</span>
                                </div>
                                <span className="text-gray-600 text-sm">{match.court}</span>
                              </div>
                              <div className="grid md:grid-cols-3 gap-4 items-center">
                                <div className="text-right">
                                  <p className="font-semibold text-gray-900">{match.team1}</p>
                                </div>
                                <div className="text-center">
                                  <div className="flex items-center justify-center gap-2">
                                    <span className="text-2xl font-black text-[#D6E826]">{match.score1}</span>
                                    <span className="text-gray-400">-</span>
                                    <span className="text-2xl font-black text-gray-600">{match.score2}</span>
                                  </div>
                                </div>
                                <div className="text-left">
                                  <p className="font-semibold text-gray-900">{match.team2}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {infoModalTab === "rules" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Play className="w-6 h-6 text-[#D6E826]" />
                        Reglamento
                      </h3>
                      <ul className="space-y-3">
                        {selectedTournament.rules?.map((rule: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#D6E826] mt-1">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedTournament.classification && (
                      <div className="bg-gradient-to-r from-[#D6E826]/10 to-transparent p-6 rounded-2xl border-2 border-[#D6E826]/20">
                        <Star className="w-8 h-8 text-[#D6E826] mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Sistema de Clasificación</h4>
                        <p className="text-gray-700">{selectedTournament.classification}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Classification Modal */}
      <AnimatePresence>
        {selectedClassification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedClassification(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 relative">
                <button
                  onClick={() => setSelectedClassification(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <span className="text-white font-semibold">{selectedClassification.category}</span>
                </div>
                
                <h2 className="text-4xl font-black text-white mb-2">{selectedClassification.name}</h2>
                <p className="text-white/90 text-xl">Clasificación</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Standings Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Pos</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Equipo</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Pts</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">PJ</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">G</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">P</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Sets +</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Sets -</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedClassification.standings?.map((standing: any, idx: number) => (
                        <tr
                          key={idx}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            idx < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                          }`}
                        >
                          <td className="py-4 px-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${
                              idx === 0 ? 'bg-yellow-500 text-white' :
                              idx === 1 ? 'bg-gray-400 text-white' :
                              idx === 2 ? 'bg-amber-600 text-white' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {standing.position}
                            </div>
                          </td>
                          <td className="py-4 px-4 font-semibold text-gray-900">{standing.team}</td>
                          <td className="py-4 px-4 text-center font-bold text-gray-900">{standing.points}</td>
                          <td className="py-4 px-4 text-center text-gray-600">{standing.matches}</td>
                          <td className="py-4 px-4 text-center text-green-600 font-semibold">{standing.wins}</td>
                          <td className="py-4 px-4 text-center text-red-600 font-semibold">{standing.losses}</td>
                          <td className="py-4 px-4 text-center text-gray-600">{standing.setsWon}</td>
                          <td className="py-4 px-4 text-center text-gray-600">{standing.setsLost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Legend */}
                <div className="mt-8 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600">1º Lugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">2º Lugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-600">3º Lugar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegistrationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowRegistrationModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 relative">
                <button
                  onClick={() => setShowRegistrationModal(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h2 className="text-3xl font-black text-white mb-2">Inscripción</h2>
                <p className="text-white/90 text-lg">{showRegistrationModal.name}</p>
              </div>

              {/* Form */}
              <div className="p-8">
                <form className="space-y-6">
                  {/* Player 1 */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#D6E826]" />
                      Jugador 1
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Nombre completo *</label>
                        <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">DNI/NIE *</label>
                        <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Teléfono *</label>
                        <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Player 2 */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#D6E826]" />
                      Jugador 2
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Nombre completo *</label>
                        <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">DNI/NIE *</label>
                        <input type="text" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Teléfono *</label>
                        <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Comentarios adicionales</label>
                    <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D6E826] focus:outline-none transition-colors" placeholder="Alergias, preferencias de horario, etc." />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <label className="text-sm text-gray-700">He leído y acepto los términos y condiciones del torneo *</label>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="w-full bg-[#D6E826] text-white py-4 rounded-xl font-semibold hover:bg-[#D6E826]/90 transition-colors duration-300 flex items-center justify-center gap-2">
                    Confirmar inscripción
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
