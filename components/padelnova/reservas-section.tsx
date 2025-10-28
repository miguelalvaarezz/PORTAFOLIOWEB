"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, MapPin, Zap, Sparkles, ChevronRight, Filter, Search } from "lucide-react";

export function ReservasSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [availableCourts, setAvailableCourts] = useState<any[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [courtFilterType, setCourtFilterType] = useState<"any" | "specific">("any");
  const [selectedCourts, setSelectedCourts] = useState<number[]>([]);

  const courtsData = [
    { id: 1, name: "Pista Nova 1", type: "Cristal", availability: 85 },
    { id: 2, name: "Pista Nova 2", type: "Pared", availability: 70 },
    { id: 3, name: "Pista Nova 3", type: "Cristal", availability: 90 },
    { id: 4, name: "Pista Nova 4", type: "Pared", availability: 60 },
    { id: 5, name: "Pista Nova 5", type: "Cristal", availability: 75 },
  ];

  const allTimeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  const isDurationAvailable = (durationValue: string) => {
    if (!selectedDay) return true;
    const maxDurationsByDay: { [key: number]: string[] } = {
      1: ["90"],
      2: ["120"],
      3: ["120"],
      4: ["60"],
      5: ["90"],
      6: ["120"],
      7: ["90"],
    };
    const maxDuration = maxDurationsByDay[selectedDay]?.[0] || "90";
    const maxIndex = ["30", "60", "90", "120"].indexOf(maxDuration);
    const currentIndex = ["30", "60", "90", "120"].indexOf(durationValue);
    return currentIndex <= maxIndex;
  };

  const isTimeAvailable = (time: string) => {
    if (!selectedDuration) return true;
    const unavailableCombinations = [
      { day: 3, time: "15:00" },
      { day: 5, time: "21:00" },
      { day: 7, time: "12:00" },
      { day: 1, time: "22:00" },
      { day: 4, time: "19:00" },
    ];
    if (selectedDay) {
      const isUnavailable = unavailableCombinations.some(
        combo => combo.day === selectedDay && combo.time === time
      );
      if (isUnavailable) return false;
    }
    const durationBasedSlots: { [key: string]: string[] } = {
      "30": allTimeSlots,
      "60": allTimeSlots.slice(0, 13),
      "90": allTimeSlots.slice(0, 10),
      "120": allTimeSlots.slice(0, 7),
    };
    const availableSlots = durationBasedSlots[selectedDuration] || allTimeSlots;
    return availableSlots.includes(time);
  };

  const filterAvailableCourts = () => {
    if (!selectedTime || !selectedDuration || !selectedDay) {
      setAvailableCourts([]);
      return;
    }
    const unavailableCombinations = [
      { day: 3, time: "15:00" },
      { day: 5, time: "21:00" },
      { day: 7, time: "12:00" },
      { day: 1, time: "22:00" },
      { day: 4, time: "19:00" },
    ];
    const isUnavailable = unavailableCombinations.some(
      combo => combo.day === selectedDay && combo.time === selectedTime
    );
    if (isUnavailable) {
      setAvailableCourts([]);
      return;
    }
    let filtered = courtsData.filter(court => {
      if (court.availability <= 70) return false;
      if (courtFilterType === "specific" && selectedCourts.length > 0) {
        if (!selectedCourts.includes(court.id)) return false;
      }
      if (selectedDuration === "120" && court.availability < 85) return false;
      if (selectedDuration === "90" && court.availability < 80) return false;
      if (selectedDuration === "60" && court.availability < 75) return false;
      if (selectedDuration === "30" && court.availability < 70) return false;
      return true;
    });
    setAvailableCourts(filtered);
  };

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

  const getDayOfWeek = (day: number | null) => {
    if (!day) return "";
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const baseDay = 1;
    const dayIndex = (day - baseDay) % 7;
    const adjustedIndex = (dayIndex + 1) % 7;
    return daysOfWeek[adjustedIndex];
  };

  return (
    <section id="reservas" className="pt-0 pb-20 -mt-8 bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-16">
          <span className="text-[#D6E826] text-xs font-light tracking-[0.3em] uppercase mb-4 block">
            Reservas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Reserva tu pista preferida{" "}
            <span className="text-[#D6E826] block">en 30 segundos.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema de reservas online. Paga, confirma y juega. Sin complicaciones.
          </p>
        </div>

        {/* Court Selection Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border border-gray-100"
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100"
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

        {selectedDay && selectedTime && selectedDuration ? (
          availableCourts.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 mt-12"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  Pistas disponibles para el <span className="text-[#D6E826]">{getDayOfWeek(selectedDay)} {selectedDay} a las {selectedTime}</span>
                </h2>
                <p className="text-gray-600">Duración: {selectedDuration} minutos</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {availableCourts.map((court) => (
                  <motion.div
                    key={court.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: court.id * 0.1 }}
                    className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer group border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#D6E826]" />
                        <span className="font-bold text-gray-900">{court.name}</span>
                      </div>
                      <span className="text-sm text-green-600 font-bold">Disponible</span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {court.type}
                      </span>
                    </div>
                    <div className="relative h-32 bg-gradient-to-br from-[#D6E826] to-green-300 rounded-2xl overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-black/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl">🏓</motion.div>
                      </div>
                    </div>
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
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400 font-light">
                No hay pistas disponibles para esta fecha y horario.
              </p>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400 font-light">
              {!selectedDay && "Selecciona un día para continuar"}
              {selectedDay && !selectedDuration && "Selecciona la duración de la reserva"}
              {selectedDay && selectedDuration && !selectedTime && "Selecciona un horario"}
            </p>
          </motion.div>
        )}

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
    </section>
  );
}
