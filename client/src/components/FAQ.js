import React from 'react';
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Container from '@material-ui/core/Container';

class FAQ extends React.Component {

  render() {

    return (
      <Container>
        <br />
        <Typography variant="h5" color="Primary">QUESTIONS?</Typography>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">How do I choose a plant?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Plants are an easy way to add color, energy and transform your space,
              but which plant is for you? Choosing the right plant will depend on your style preference,
              the size of your space and your
          <Link href="https://www.thesill.com/blogs/plants-101/eligible-environments" target="_blank"> home or office environment</Link>. What kind of plants do you like?
          From these, decide how much space you can accommodate, then do a little <Link href="https://www.thesill.com/blogs/plants-101/top-ten-plant-care-tips" target="_blank"> digging </Link> to see if these
          plants are suited to thrive in their new home based on their care requirements.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">I'm a new plant owner. What should I do first?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Light is food for plants, so the most important part of plant parenthood is feeding your plant babies!
              Generally, the more light the better. Plants want to be in your window. Some plants can tolerate lower
              light away from windows, but as a rule, no plant should ever be more than 6 feet from a window.
          <br />
              <br />
          If you brought your new plant home in a grow pot, we suggest <Link href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-repotting" target="_blank"> repotting</Link> it within a week or two.
          Most plants are often sold in nursery pots or plastic containers which may not exactly fit the decor vibes of your space.
          They may also be too small for your plant. To repot, choose a pot 1-3 inches larger than the original container.
          The color, style and fabrication is totally up to you. Add a pop of color with a red clay pot, or keep it light and airy with <Link href="https://www.thesill.com/collections/pots" target="_blank"> white ceramic</Link>.
          Ideally, your pot will have drainage (that hole at the bottom). If not, line the bottom of the pot with lava rocks, about 1 inch deep.
          Once your plant is in its new pot, <Link href="https://www.thesill.com/blogs/the-basics/drink-up" target="_blank"> water</Link> the soil for a nice uniform consistency and let the soil dry out completely before the next watering.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">How do I know if my plant is happy in its new home?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In order to make a plant happy, try your best to recreate its natural environment. For example, succulents
              and cacti are desert plants. They enjoy being in direct sunlight for as much of the day as possible.
              Ferns are from misty forests, so they need the high humidity that, say, a bathroom (with a window) brings.
          It may seem kind of obvious, but not dying is a good thing. If the plant is getting enough light — <Link href="https://www.thesill.com/blogs/plants-101/lighten-up" target="_blank">light is
          food for plants</Link>  — then it will grow. Don’t be alarmed if a plant doesn’t grow or do much. It may be in a dormancy phase.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">When should I repot my plant?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you see one or a combination of these signs, you'll know it's time to repot your plant:
          <ol>
                <li>
                  It’s grown up: You know your plant has outgrown the nursery grow pot if:
            <br />
                  <br />
            – Roots are growing through the drainage holes at the bottom of the grow pot
            <br />
                  <br />
            – Roots are pushing the plant up, out of the grow pot It’s top heavy, and falls over easily It’s growing slower than normal (outside of fall/winter dormancy)
            <br />
                  <br />
            – The size of the plant is three times or more the size of the grow pot
            </li>
                <br />
                <li>
                  Dry potting mix: Your plant’s potting mix dries out more quickly than usual, requiring more frequent waterings
            </li>
                <br />
                <li>
                  It’s the season: Your plant could use fresh potting mix and more space for the spring–summer growing season
            </li>
              </ol>
              <br />

          Or you might want to get your hands dirty, and that’s an equally valid reason.
          Studies have shown that when we get in touch with nature, literally, we reduce mental fatigue and stress,
          while increasing relaxation and self-esteem. Even brief exposure to nature can make us more altruistic,
          and touching real foliage can elicit an unconscious calming effect.
          </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">How often should I change my plant’s potting mix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In a year or two — if your plant has not overgrown its current planter — you can simply change
        the potting mix out to provide it with new nutrients. Learn more about potting mixes <Link href="https://www.thesill.com/blogs/care-miscellaneous/potting-mix-101" target="_blank"> here</Link>.
        <br />
              <br />
        Small doses of nutrient-rich <Link href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-fertilizer" target="_blank"> fertilizer</Link> may also be enough to get your potting mix back in tip top shape.

          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">What indoor plants are the easiest to grow?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Try philodendron, pothos, rubber plants, mother-in-law's tongue, dracaena, spider plants, cast iron plants, or umbrella plants.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">How do I fertilize my plant?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We recommend following the instructions on the packaging of whatever fertilize you choose.
              Many are added to liquids and used in your watering can while watering. All fertilizers,
              whether liquid, dissolvable, or granular are applied to the potting mix (not the plant
            itself/the plant's leaves). Learn more about fertilizer <Link href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-fertilizer" target="_blank"> here</Link>.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">Can my plant thrive in artificial light?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As long as you have the right bulbs. Plants respond best to sunlight,
              so you’ll want a bulb that fills color and intensity requirements.
              Most regular bulbs, like the ones in your light fixtures, aren’t sufficient
              because they produce mostly green light. Green plants reflect green light away
              instead of absorbing it, so it’s pretty useless to them. Colors like blue, green-blue,
              yellow-orange and red — especially red light — maximize photosynthesis and other vital functions.
              White LED lights are fine, but spiral-shaped, white Compact Fluorescent Lamps (CFLs) are best.
              To get the right intensity, check your bulb’s Lumen count: the higher the better. For example,
              if your plants require lots of light, opt for a bulb or bulbs which total 3000 lumens or more.
          <br />
              <br />
          Learn more about the importance of light for plants <Link href="https://www.thesill.com/blogs/plants-101/lighten-up" target
                ="_blank"> here</Link>.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">What do yellow leaves mean?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yellow leaves can mean a lot of things, not just overwatering! Yellow leaves could
              mean that the plant is too hot, too cold, not receiving enough water, receiving too much water,
              nutrient deficient, or it could be totally normal… Take into account where this
              is happening on the plant — and how many leaves are yellow. Are the lower leaves turning yellow,
              with only one or two falling off here and there, but the rest of the plant looks fine?
              Then it’s just old leaves, shedding.
          <br />
              <br />
          To figure out if there’s potentially a watering problem — let the potting mix be your guide
          and feel it. Is the mix too wet or super dry? Generally, if there’s a watering problem,
          most leaves on the plant will be affected. If it’s too hot or too cold, well, plants want to
          be where you want to be (70 and sunny, anyone?). So, if you put your head where the plant is,
          and it’s too drafty, cold, or hot, then try to move it to another spot with less <Link href="https://www.thesill.com/blogs/the-basics/eligible-environments" target="_blank"> environmental changes</Link>.
          Remember, yellow leaves never occur without other symptoms unless they are old leaves. It’s identifying
          those other symptoms that will help you get to the root of the problem.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">Why do leaves drop?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Leaves usually drop for one of two reasons: (1) either the roots cannot support them,
              or (2) there is not enough light. In the first case, the plant is pot-bound. Plants can be
              just as big below ground as they are above ground, so they will drop leaves if the roots cannot grow.
          In this case, you'll want to <Link href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-repotting" target="_blank"> repot your plant</Link> into a bigger planter with more room for the roots.
          <br />
              <br />
          In the second case, light is food for plants, so the plant literally isn't getting enough food
          to support the leaves, so it drops them. Help your plant by providing <Link href="https://www.thesill.com/blogs/plants-101/lighten-up" target="_blank"> more sunlight</Link> or doing a little pruning.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">Why is my plant leaning?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If your plant is leaning, access how much your plant is leaning (a little or a lot?)
              A little lean is totally normal because, gravity. Also, if it’s a vining plant like a monstera,
              then leaning is totally normal. Extreme lean, not so much. Both can be corrected with the right
          amount of <Link href="https://www.thesill.com/blogs/plants-101/lighten-up" target="_blank"> sunlight</Link> and rotation. Remember, plants grow towards sunlight. To fix a slight lean,
          try rotating your plant every few weeks. If your plant is leaning a lot and you notice new growth
          to be smaller, pale and spindly, it needs even more sunlight. Try moving your plant closer to the
          light source and rotate every time you water. If your lean becomes extreme, it could be a deeper-rooted
          problem: root rot, improper potting and outgrowing the pot are common causes. In these cases, your
          plant needs to be <Link href="https://www.thesill.com/blogs/care-miscellaneous/plant-care-repotting" target="_blank"> repotted</Link>.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">My flowers are falling off – is my plant dying?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No — flowers are just reproductive structures — they come and they go!
          <br />
          They fall off when your plant is no longer feeling frisky. The rest of the plant is unaffected.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Link underline="none" component={RouterLink} to="/contact-us">
          {"Didn't find an answer? Contact us"}
        </Link>
      </Container>
    );
  }
}

export default FAQ;