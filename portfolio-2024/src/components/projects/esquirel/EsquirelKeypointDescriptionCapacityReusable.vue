<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from '@/components/BoldElement.vue'

export default defineComponent({
  name: 'EsquirelKeypointDescriptionCapacityReusable',
  components: { BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      When I joined my game designer and game artist teammates, I was faced with the challenge of a
      very
      <bold-element>short production</bold-element>
      timeline. The other programmer on the team focused on tech art and visual effects, so I took
      on the role of
      <bold-element>main gameplay programmer</bold-element>
      . As a team, we decided to prioritize an
      <bold-element>iterative</bold-element>
      and
      <bold-element>reusable</bold-element>
      approach for the features we developed. I worked closely with the game designers to identify
      which behaviors could be reused to save time, speed up testing, and help them
      <bold-element>rescope the features to match my production capacity</bold-element>
      .
    </space-paragraph>
    <space-paragraph>
      The main challenge during development was building different abilities. We focused on three
      key features that could be
      <bold-element>reused across multiple abilities with small adjustments</bold-element>
      : Rectangular area damage, Bezier curve-based targeting and movement, and Fog of war
      interaction.
    </space-paragraph>
    <space-paragraph>
      For the
      <bold-element>Bezier curve</bold-element>
      , I had to
      <bold-element>abstract</bold-element>
      the behavior to support
      <bold-element>multiple use cases</bold-element>
      . I used
      <bold-element>callbacks</bold-element>
      to handle events like dealing area damage at the curve's endpoint or triggering the smoke
      effect. I also handled the
      <bold-element>curve preview</bold-element>
      for aiming.
    </space-paragraph>
    <space-paragraph>
      However, the biggest challenge was
      <bold-element
        >determining whether an object could be placed at the end of the curve and where
      </bold-element>
      . Especially to avoid the object following the curve end inside a wall. I created a helper
      algorithm that used
      <bold-element>raycasts</bold-element>
      to check if the target destination was valid. If not, the algorithm would search for
      alternative
      <bold-element>nearby points</bold-element>
      by scanning in
      <bold-element>circular patterns</bold-element>
      of
      <bold-element>varying radius</bold-element>
      until it found an available spot.
    </space-paragraph>
    <main-paragraph>
      Finally, another example of reused behavior was the <bold-element>capture point</bold-element> that I developed as well. We reused
      the capture point logic to create two types of capture points—one that produces <bold-element>nuts</bold-element> and
      another that produces <bold-element>gold</bold-element>. This simple change became a key part of the <bold-element>macro game's dynamics</bold-element>.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
