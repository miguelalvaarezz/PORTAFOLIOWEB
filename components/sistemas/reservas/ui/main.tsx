"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, MapPin, Zap, Sparkles, ChevronRight, Filter, Search } from "lucide-react";
import Link from "next/link";

export default function SistemaReservasPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("60"); // en minutos
  const [selectedTime, setSelectedTime] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [availableCourts, setAvailableCourts] = useState<any[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [courtFilterType, setCourtFilterType] = useState<"any" | "specific">("any");
  const [selectedCourts, setSelectedCourts] = useState<number[]>([]);

  // Datos de disponibilidad de pistas
  const courtsData = [
    { id: 1, name: "Pista 1", type: "Cristal", availability: 85 },
    { id: 2, name: "Pista 2", type: "Pared", availability: 70 },
    { id: 3, name: "Pista 3", type: "Cristal", availability: 90 },
    { id: 4, name: "Pista 4", type: "Pared", availability: 60 },
    { id: 5, name: "Pista 5", type: "Cristal", availability: 75 },
  ];

  const allTimeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  // Verificar si una duración está disponible
  const isDurationAvailable = (durationValue: string) => {
    if (!selectedDay) return true;
    
    // Verificar disponibilidad según día y pistas seleccionadas
    const maxDurationsByDay: { [key: number]: string[] } = {
      1: ["90"],          // Lunes: máxima 1.5h
      2: ["120"],         // Martes: máxima 2h
      3: ["120"],         // Miércoles: máxima 2h
      4: ["60"],          // Jueves: máxima 1h
      5: ["90"],          // Viernes: máxima 1.5h
      6: ["120"],         // Sábado: máxima 2h
      7: ["90"],          // Domingo: máxima 1.5h
    };
    
    const maxDuration = maxDurationsByDay[selectedDay]?.[0] || "90";
    const maxIndex = ["30", "60", "90", "120"].indexOf(maxDuration);
    const currentIndex = ["30", "60", "90", "120"].indexOf(durationValue);
    
    return currentIndex <= maxIndex;
  };

  // Verificar si un horario está disponible
  const isTimeAvailable = (time: string) => {
    if (!selectedDuration) return true;
    
    const unavailableCombinations = [
      { day: 3, time: "15:00" },  // Miércoles a las 15:00
      { day: 5, time: "21:00" },  // Viernes a las 21:00
      { day: 7, time: "12:00" },  // Domingo a las 12:00
      { day: 1, time: "22:00" },  // Lunes a las 22:00
      { day: 4, time: "19:00" },  // Jueves a las 19:00
    ];
    
    if (selectedDay) {
      const isUnavailable = unavailableCombinations.some(
        combo => combo.day === selectedDay && combo.time === time
      );
      if (isUnavailable) return false;
    }
    
    const durationBasedSlots: { [key: string]: string[] } = {
      "30": allTimeSlots,  // 30min: todos los horarios
      "60": allTimeSlots.slice(0, 13),  // 1h: hasta las 21:00
      "90": allTimeSlots.slice(0, 10),  // 1.5h: hasta las 18:00
      "120": allTimeSlots.slice(0, 7),  // 2h: hasta las 15:00
    };
    
    const availableSlots = durationBasedSlots[selectedDuration] || allTimeSlots;
    return availableSlots.includes(time);
  };

  // Filtrar pistas disponibles basado en todos los parámetros
  const filterAvailableCourts = () => {
    if (!selectedTime || !selectedDuration || !selectedDay) {
      setAvailableCourts([]);
      return;
    }
    
    // Combinaciones que no tienen pistas disponibles
    const unavailableCombinations = [
      { day: 3, time: "15:00" },  // Miércoles a las 15:00
      { day: 5, time: "21:00" },  // Viernes a las 21:00
      { day: 7, time: "12:00" },  // Domingo a las 12:00
      { day: 1, time: "22:00" },  // Lunes a las 22:00
      { day: 4, time: "19:00" },  // Jueves a las 19:00
    ];
    
    // Verificar si la combinación actual no tiene disponibilidad
    const isUnavailable = unavailableCombinations.some(
      combo => combo.day === selectedDay && combo.time === selectedTime
    );
    
    if (isUnavailable) {
      setAvailableCourts([]);
      return;
    }
    
    // Filtrar pistas según todos los criterios
    let filtered = courtsData.filter(court => {
      // 1. Verificar disponibilidad general (>70%)
      if (court.availability <= 70) return false;
      
      // 2. Si hay selección específica de pistas, filtrar por ellas
      if (courtFilterType === "specific" && selectedCourts.length > 0) {
        if (!selectedCourts.includes(court.id)) return false;
      }
      
      // 3. Verificar disponibilidad según duración y hora
      // Duraciones más largas requieren mayor disponibilidad
      if (selectedDuration === "120" && court.availability < 85) return false;
      if (selectedDuration === "90" && court.availability < 80) return false;
      if (selectedDuration === "60" && court.availability < 75) return false;
      if (selectedDuration === "30" && court.availability < 70) return false;
      
      return true;
    });
    
    setAvailableCourts(filtered);
  };

  // Actualizar cuando cambie el tiempo o duración
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setTimeout(filterAvailableCourts, 0);
  };

  const handleDurationSelect = (duration: string) => {
    setSelectedDuration(duration);
    if (selectedTime && selectedDay) {
      setTimeout(filterAvailableCourts, 0);
    }
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    if (selectedTime && selectedDuration) {
      setTimeout(filterAvailableCourts, 0);
    }
  };

  // Handler para cuando cambia la selección de pistas
  const handleCourtToggle = (courtId: number) => {
    const newSelected = selectedCourts.includes(courtId)
      ? selectedCourts.filter(id => id !== courtId)
      : [...selectedCourts, courtId];
    setSelectedCourts(newSelected);
    
    if (selectedTime && selectedDuration && selectedDay && newSelected.length > 0) {
      setTimeout(filterAvailableCourts, 0);
    }
  };

  const durations = [
    { label: "30 min", value: "30" },
    { label: "1 hora", value: "60" },
    { label: "1.5 horas", value: "90" },
    { label: "2 horas", value: "120" }
  ];

  // Función para obtener el día de la semana
  const getDayOfWeek = (day: number | null) => {
    if (!day) return "";
    
    const daysOfWeek = [
      "Domingo", "Lunes", "Martes", "Miércoles", 
      "Jueves", "Viernes", "Sábado"
    ];
    
    // Calcular qué día de la semana es basado en el día del mes
    // Asumiendo que el día 1 es lunes (puedes ajustar según necesites)
    const baseDay = 1; // El día 1 corresponde a...
    const dayIndex = (day - baseDay) % 7;
    
    // Ajustar para que el día 1 sea Lunes
    const adjustedIndex = (dayIndex + 1) % 7;
    
    return daysOfWeek[adjustedIndex];
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Inicial */}
          <div className="w-10 h-10 flex items-center justify-center border-2 border-[#D6E826] rounded group-hover:border-[#D6E826]/80 transition-colors duration-300">
            <span className="text-xl font-bold text-[#D6E826] group-hover:text-[#D6E826]/80 transition-colors duration-300">
              M
            </span>
          </div>

          {/* Nombre */}
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-semibold text-gray-900 group-hover:text-[#D6E826] transition-colors duration-300">
              Miguel
            </span>
            <span className="text-xl font-light text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Álvarez
            </span>
          </div>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative px-6 pt-16 pb-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link href="/#proyectos" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group">
            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">Volver a la página principal</span>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
            <span className="block">Sistema de</span>
            <span className="block text-[#D6E826]">Reservas</span>
          </h1>
          <div className="inline-flex items-center gap-3 bg-[#D6E826]/10 px-6 py-3 rounded-2xl">
            <Zap className="w-5 h-5 text-[#D6E826]" />
            <p className="text-lg font-medium text-gray-900">
              Reserva tu pista en menos de 30 segundos
            </p>
          </div>
        </motion.div>

        {/* Court Selection Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-6 max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Seleccionar pista</h2>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCourtFilterType("any");
                setSelectedCourts([]);
              }}
              className={`p-4 rounded-2xl text-center transition-all ${
                courtFilterType === "any"
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-base font-bold">Cualquier pista</div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCourtFilterType("specific")}
              className={`p-4 rounded-2xl text-center transition-all ${
                courtFilterType === "specific"
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-base font-bold">Pista específica</div>
            </motion.button>
          </div>

          {/* Specific Court Selection */}
          {courtFilterType === "specific" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Selecciona pistas</h3>
              <div className="grid grid-cols-5 gap-3">
                {courtsData.map((court) => (
                  <motion.button
                    key={court.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCourtToggle(court.id)}
                    className={`p-4 rounded-2xl text-center transition-all ${
                      selectedCourts.includes(court.id)
                        ? 'bg-[#D6E826] text-gray-900 shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="font-bold">{court.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{court.type}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-8 max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Selecciona la fecha
            </h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Date Picker */}
          <div className="mb-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => (
                <div key={index} className="text-center text-xs font-bold text-gray-500 uppercase">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <motion.button
                  key={day}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDaySelect(day)}
                  className={`p-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedDay === day
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className={selectedDay === day ? 'text-white font-bold' : 'text-gray-900 font-bold'}>
                      {day}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Duration Selection */}
          {selectedDay && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Duración de la reserva
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {durations.map((duration) => {
                  const isAvailable = isDurationAvailable(duration.value);
                  return (
                    <motion.button
                      key={duration.value}
                      whileHover={isAvailable ? { scale: 1.05, y: -2 } : {}}
                      whileTap={isAvailable ? { scale: 0.95 } : {}}
                      onClick={() => isAvailable && handleDurationSelect(duration.value)}
                      disabled={!isAvailable}
                      className={`p-3 rounded-2xl text-sm font-semibold transition-all ${
                        !isAvailable
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                          : selectedDuration === duration.value
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {duration.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Time Slots Grid */}
          {selectedDuration && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Horarios disponibles
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3">
                {allTimeSlots.map((time) => {
                  const isAvailable = isTimeAvailable(time);
                  return (
                    <motion.button
                      key={time}
                      whileHover={isAvailable ? { scale: 1.05, y: -2 } : {}}
                      whileTap={isAvailable ? { scale: 0.95 } : {}}
                      onClick={() => isAvailable && handleTimeSelect(time)}
                      disabled={!isAvailable}
                      className={`p-3 rounded-2xl text-sm font-semibold transition-all ${
                        !isAvailable
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                          : selectedTime === time
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {time}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>

        {/* Check if all are selected and show courts or instruction messages */}
        {selectedDay && selectedTime && selectedDuration ? (
          availableCourts.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto mb-8 mt-12"
            >
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Pistas disponibles para el <span className="text-[#D6E826]">{getDayOfWeek(selectedDay)} {selectedDay} a las {selectedTime}</span>
              </h2>
              <p className="text-gray-600">Duración: {selectedDuration} minutos</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {availableCourts.map((court) => (
            <motion.div
              key={court.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (court.id * 0.1) }}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer group"
            >
              {/* Availability Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D6E826]" />
                  <span className="font-bold text-gray-900">{court.name}</span>
                </div>
                <span className="text-sm text-green-600 font-bold">Disponible</span>
              </div>

              {/* Court Type */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {court.type}
                </span>
              </div>

              {/* Court Visual */}
              <div className="relative h-32 bg-gradient-to-br from-[#D6E826] to-green-300 rounded-2xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl">🏓</motion.div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPaymentModal(true)}
                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Reservar ahora
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
              ))}
            </div>
          </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto text-center py-20"
            >
              <p className="text-2xl text-gray-400 font-light">
                Cargando pistas disponibles...
              </p>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto text-center py-20"
          >
            <p className="text-2xl text-gray-400 font-light">
              {!selectedDay && "Selecciona un día para continuar"}
              {selectedDay && !selectedDuration && "Selecciona la duración de la reserva"}
              {selectedDay && selectedDuration && !selectedTime && "Selecciona un horario"}
            </p>
          </motion.div>
        )}

      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaymentModal(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Efectivo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl p-12 shadow-2xl cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-6">💵</div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Efectivo</h3>
                    <p className="text-gray-600">Paga al llegar</p>
                  </div>
                </motion.div>

                {/* Tarjeta */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl p-12 shadow-2xl cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-6">💳</div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Tarjeta</h3>
                    <p className="text-gray-600">Paga ahora online</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
