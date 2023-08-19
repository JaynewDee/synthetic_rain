export interface PoemType {
    id: number,
    title: string,
    date: string,
    body: string
}

const poems: PoemType[] = [
    {
        id: 1,
        title: "Past the Wound",
        date: new Date().toDateString(),
        body: "Look past the wound. Look behind. :The piles of leaves you once leapt among in youth\nyield no sunscreen to that holy anguish, loss on a cross.\nYou may have remained brave but loss... \nloss gives less than fuck.\nGives heavens less than enough to gather the shattered up.\nBack before the bombs fell, back before your words found their dooming, \nstuck flamestruck face to face with a golden hell. :Look past the wound. Look behind."
    },
    {
        id: 2,
        title: "Where the Whole Is",
        date: new Date().toDateString(),
        body: "Home is where the whole is, \nwhere the soul lives. :Closest are the homeless."
    },
    {
        id: 3,
        title: "No Wings",
        date: new Date().toDateString(),
        body: "Was I built brittle? \nLess for sense the wounded leprosy. :I bark about brilliance like a buried dog. \nMy two callous hands choke out silver dreams, the croaking. :'I keep feeling my shoulders for no wings.'"
    },
    {
        id: 4,
        title: "Halfway Home",
        date: new Date().toDateString(),
        body: "Bathing in the dusk-spun dustlight,\nyou were halfway home to the orphanage\nwhen high noon struck your shiver,\nlit those golden garden eyes. :And that notebook penned in purple\npressed to lip swell gave me keepsake,\ngave me griefwave,\ngave me safety. :I hadn’t hope but hopeless still holy,\nI was bruised, bright darling, brave \nbut lonely,\nbrushed by solemn wings to bliss the graves. :What never dare hold me now, willowed ghoul? \nYou gruesome ghost spitting vacant this wellspring gash, this hole in my clouded heart? :Speak! Rag-wringing hatesaint, \ngnashing those proud red teeth and licking clean the last bleached horse bones. :Parting yellow seas to frighten me home."
    },
    {
        id: 5,
        title: "Mud",
        date: new Date().toDateString(),
        body: "I used to be soft, I promise! \nI promise. :But the child yielded to a bare brutishness, \nleft the mud-splattered animal on the doorstep to baby blue. :Like a mayfly in July, I approached the screen door in fear. :I delighted instead beholding eyes oceanic, your laughter volcanic. \nI yielded to your polaroid.  \nYou couldn’t wait beyond a fleeting second \nto capture the pondplay under porchlight displayed. :Buried to the bearskin, afternoon rapture."
    },
    {
        id: 6,
        title: "Worthy",
        date: new Date().toDateString(),
        body: "How many strangers am I?	:My Self rings within myself, \nendless noise for fear of stillness. :I wish only for the soft feathered image of a lark at mourning, \nthe jay left breathless at the brink of release. :I want a clean sleep without collisions constant.	\nThis endless thirst a dream of home, \nwomb wet with electricity. \nThis intolerant animal intolerable, \nbegging punishment for the miracle of birth. :I was left skyless in a broken field, \ntaught by the bruising to hold my own hands."
    },
    {
        id: 7,
        title: "Still",
        date: new Date().toDateString(),
        body: "Ever fairly the care with which the chest heaves and dreams,\never fairly. :Ever tender the intentions rendered, how I meant to mend her. :Ever winter does the bright-eyed blindlight nuclear marry, ever winter. :Ever gossamer every dusk-spun mote of dustlight where bathing in moonshine \nsleeps the spectre of a mother. :That wordless war between us \nyet my favorite winter still. :Still as a barren nightmare in free-verse cursive.\nStill as a freshly made hospital bed burgeoned by morning.\nStill as the jay’s nest newborn flight test leapt flightless swearing never to sing.\nStill as the body de-animated. :Still so supple the fruit bearing flesh, lovely as we ever were. :Still testifying bright against the weeping blackness, \never fairly, \nstill \nalive."
    }
]

export default poems;
