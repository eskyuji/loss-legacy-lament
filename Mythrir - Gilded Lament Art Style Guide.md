# The "Gilded Lament" Art Style

*A named, reusable visual style for Mythrir character portraits, defined from three reference images: Bas Tetran XXIV, Magerna, and Meeka. Use this file as the base layer for any future character art prompt — layer character-specific details (pose, outfit, weapons) on top of it, the same way the existing per-character "Final Image Generation Prompt" sections already do.*

*⚠️ Naming note: "Gilded Lament" was chosen to echo the campaign's own title ("Loss, Legacy, and Lament") and its dominant visual motif (gold leaf over mourning imagery). Rename freely if a different name fits better — nothing else depends on this specific label.*

---

## Reference Images

- **Bas Tetran XXIV** — anthropomorphic snow leopard, red/oxblood accent, pistol and sword.
- **Magerna** — tattered scarecrow, gold/wheat accent, full moon behind.
- **Meeka** — veiled doll-faced figure, violet/gray accent, ruins and snow.

All three share the same underlying style despite very different subjects — that shared DNA is what this guide isolates.

---

## Core Style Description (drop-in paragraph)

Use this block as-is at the start of any new character prompt, before adding character-specific details:

> Dark fantasy character portrait, painterly digital illustration, tall vertical composition. The subject stands full-body or near-full-body, centered on the vertical axis, in a still, dignified three-quarter pose — gaze directed off-frame rather than at the viewer, conveying quiet reverence or resolve rather than action. Rendering is semi-realistic with painterly contrast: fine, crisp detail concentrated on the face, hands, and one key focal object (a weapon, a held item), while fabric, background, and lower body are looser and more impressionistic. Background is built from tall vertical banner-like panels alternating dark indigo-black and pale aged-parchment tones, like unfurled temple banners or a funerary folding screen, overlaid with fine cracked gold-leaf linework — crescent moons, floral flourishes, delicate filigree, as if hand-gilded onto old lacquer. A glowing moon (full or crescent) sits behind or above the subject's head like a soft halo. Diagonal ribbon-like streaks of deep oxblood-red fabric bleed across the frame, torn at the edges. Small pale moths or butterflies drift through the scene. A hazy, distant fantasy city skyline sits low in the frame, grounding the figure in the world. Small ritual objects near the base of the frame — candlesticks, an altar edge, a basket of grain — reinforce a funerary, reliquary mood. The single strongest signature technique: fabric, wrappings, and in some cases the subject's own form are rendered as jagged, angular, faceted shards — like broken stained glass or torn parchment pieced into a mosaic — rather than smooth cloth. Palette throughout is restrained and muted: deep indigo/teal-black, aged gold, bone/cream white, charcoal shadow, plus one accent color (oxblood red, violet, or similar) that can vary per character. No bright saturated colors anywhere in the frame.

---

## Style Breakdown (for editing/mixing individual elements)

**Medium & rendering:** Painterly digital illustration, not a clean render. Deliberate contrast between sharp focal detail (face, hands, one key object) and loose, textured, almost impressionistic treatment of fabric, hair, and background.

**Composition:** Tall vertical portrait format. Subject centered, full or near-full body, generous negative space above and around for the banners and moon. Three-quarter turn or slight profile lean; the subject never looks directly at the viewer.

**Background structure:** Vertical alternating panels (dark indigo-black / pale aged parchment), evoking hanging temple banners or a folding screen — not a naturalistic environment.

**Ornamentation:** Fine gold-leaf metallic linework scattered through the background — crescents, a halo-moon, floral or celestial flourishes — textured as if aged and slightly cracked, like gilding on old lacquer or an illuminated manuscript.

**Signature texture (the defining technique):** Fabric — and sometimes the subject's own body — rendered as jagged, faceted, shard-like fragments, as though made of broken stained glass or torn paper pieced into a mosaic. Apply this to cloaks, veils, wrappings, or (for non-humanoid subjects) the body material itself.

**Recurring motifs:** A glowing moon behind the head as a halo. Diagonal torn ribbons of a single accent color bleeding across the frame. Small pale moths/butterflies adrift in the scene. A distant, hazy fantasy city skyline low in the frame. Small funerary/ritual props near the base (candles, altar, basket of grain, etc.) — swap the specific prop to fit the character.

**Palette:** Deep indigo/teal-black + aged gold + bone/cream white + charcoal, plus exactly one swappable accent color per character (red for Bas, gold/wheat for Magerna, violet for Meeka). Never bright or saturated — everything reads as aged, muted, weathered.

**Mood:** Elegant, ancient, melancholic. Reverent and still rather than dynamic — this is a mourning/memorial aesthetic even when the subject isn't explicitly grieving.

---

## Reusable Prompt Template

```
[GILDED LAMENT CORE STYLE BLOCK — paste verbatim from "Core Style Description" above]

Character: [species/race, build, distinguishing features]
Pose: [standing/three-quarter/etc. — keep still and dignified, gaze off-frame]
Outfit & accent color: [character's clothing, using ONE accent color from the palette]
Key focal object: [the one item that gets sharp painterly detail — a weapon, artifact, etc.]
Recurring motif variant: [what fills the "small ritual prop" slot — candles, wheat, bones, tools, etc., fitted to the character]

Negative prompt: no bright saturated colors, no smooth clean cloth (avoid non-faceted fabric rendering), no direct eye contact with viewer, no action pose, no modern or sci-fi elements, no ornate high-fantasy armor unless already established for the character.
```

---

## Usage Notes

- When generating art for a new character, paste the Core Style Description first, then layer in that character's existing "Expression & Pose / Outfit / Weapons" details from their own wiki file, keeping the accent color to a single swap-in choice.
- The shard/faceted-fabric texture is the single most identifying trait of this style — if a generated image is missing it, the result won't read as part of this set even if the palette and composition are right.
- This style was defined from Bas, Magerna, and Meeka specifically. If it's later applied to a very different kind of subject (a location, a monster, an item rather than a person), some elements — the vertical banner background, the halo-moon — may need to bend; the shard texture and muted gold/indigo/accent palette should still carry through as the throughline.
