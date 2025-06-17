ItemEvents.tooltip(event => {
  const effects = {
    "blue_dream_joint": "Water Breathing",
    "girl_scout_cookies_joint": "Regeneration",
    "lemon_haze_joint": "Haste",
    "northern_lights_joint": "Speed",
    "panama_red_joint": "Strength",
    "purple_haze_joint": "Levitation",
    "sour_diesel_joint": "Fire Resistance",
    "white_widow_joint": "Night Vision",
    "black_mamba_joint": "Invisibility"
  }

  for (const [id, effect] of Object.entries(effects)) {
    event.add(`mystical_herbs:${id}`, [
      Text.of(`Effect: ${effect}`).gray()
    ])
  }
})
