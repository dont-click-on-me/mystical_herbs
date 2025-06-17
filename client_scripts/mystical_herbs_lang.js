ClientEvents.lang('en_us', event => {
  const strains = [
    ["black_mamba", "§8", "Black Mamba"],
    ["blue_dream", "§b", "Blue Dream"],
    ["girl_scout_cookies", "§d", "Girl Scout Cookies"],
    ["lemon_haze", "§e", "Lemon Haze"],
    ["northern_lights", "§2", "Northern Lights"],
    ["panama_red", "§c", "Panama Red"],
    ["purple_haze", "§5", "Purple Haze"],
    ["sour_diesel", "§6", "Sour Diesel"],
    ["white_widow", "§f", "White Widow"]
  ]

  for (const [id, color, name] of strains) {
    event.renameItem(`mystical_herbs:fresh_${id}_nug`, `${color}Fresh ${name} Nug`)
    event.renameItem(`mystical_herbs:dried_${id}_nug`, `${color}Dried ${name} Nug`)
    event.renameItem(`mystical_herbs:${id}_oil`, `${color}${name} Oil`)
    event.renameItem(`mystical_herbs:${id}_joint`, `${color}${name} Joint`)
  }

  event.renameItem("mystical_herbs:cannabis_leaf", "§aCannabis Leaf")
})
