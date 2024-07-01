import { useParams } from "react-router-dom";
import '../../css/pages/ProjectPages.css';
import logos from '../../images/project/portfolio/logos.png';
import standOut from '../../images/project/portfolio/standout.png';
import example from '../../images/project/tictactoe/tictactoe_example.png';

const ProjectPage = () => {
    const { name } = useParams();

    const filter = `${name}`.toLowerCase().replace(/\s+/g, "");

    const { goal, problems, solutions, reflection } = mapProjectSection(filter);

    return (
        <>
            <h1 className="projectName"> { name } </h1>
            <section className="projectpage">
                <h2> Goal of the Project </h2>
                { goal }
            </section>
            <section className="projectpage">
                <h2> Problems Faced During Development </h2>
                { problems }
            </section>
            <section className="projectpage">
                <h2> Developed Solutions </h2>
                { solutions }
            </section>
            <section className="projectpage">
                <h2> Reflection </h2>
                { reflection }
            </section>
        </>
    );
}

function mapProjectSection(keyword) {
    const sections = {
        goal: "",
        problems: "",
        solutions: "",
        reflection: ""
    }

    switch(keyword) {
        case "studybuddy": {
            sections.goal = 
            <p style={{ whiteSpace: "pre-line" }}>
                This was a CSCI-430 project in which we had to create an app called StudyBuddy, a place where people can make study groups, accounts, and more.
                <br />The goals I set out were to go above and beyond the scope and make clean, readable, and repeatable code to ensure it ran smoothly. 
                Additionally, a clean color and design to make it visually appealing. 
            </p>
            
            sections.problems = 
            <section>
                <p>Even though the main tasks were quite simple and easy to implement. It was more on the design side I had issues with. </p>
                <ol>
                    <li>What colors should it be?</li>
                    <li>What should be the main colors? </li>
                    <li>The page layouts and designs. </li>
                </ol>
                <p>And more...</p>
                
                <p>Additionally, I wanted to make a codebase that was repeatable and easily readable. So I knew I wanted to have all of the fetch requests inside a different file.
                <br /> So, fetching for a User profile I would simply call UserDatabase.getCurrentUser() instead of fetch... because </p>
                <ol>
                    <li>I did this for organization. </li>
                    <li>I did this for clean code. </li>
                </ol>
            </section>
            
            sections.solutions = 
            <section>
                <p> The solution was to not dive straight into it. Instead, figure out which colors to get via research and color theory/color psychology.
                <br /> Different colors can bring out different emotions. I want the website to be a calming place in a stressful time. So, I choose Blues and Greens. </p>
                
                <p> The different colors I chose were the following: </p>
                <ul>
                    <li style={{color: "hsl(230, 25%, 90%)"}}> hsl(230, 25%, 90%) - very light cream blue </li>
                    <li style={{color: "hsl(84, 41%, 96%)"}}> hsl(84, 41%, 96%) - very light cream green </li>
                    <li style={{color: "hsl(84, 41%, 70%)"}}> hsl(84, 41%, 70%) - cream forest </li>
                    <li style={{color: "hsl(230, 43%, 49%) "}}> hsl(230, 43%, 49%) - dark blue </li>
                    <li style={{color: "hsl(84, 41%, 96%) "}}> hsl(84, 41%, 96%) - Essentially white / very light green </li>
                    <li style={{color: "hsl(84, 41%, 38%) "}}> hsl(84, 41%, 38%) - dark green </li>
                    <li style={{color: "hsl(94, 66%, 88%) "}}> hsl(94, 66%, 88%) - another light green </li>
                    <li> and more... </li>
                </ul>
                
                <p style={{ whiteSpace: "pre-line" }}> 
                    These colors were used deliberately. 
                    I also used hsl (Hue, Saturation, and Lightness) for I can change those values very quickly.
                    <br /> The theory with these colors remains. Colors bring certain emotions when viewing. 
                    I wanted to bring a sense of calmness, welcoming, and communication.
                    <br />After all, this is a platform where you make study groups and people can join them.
                </p>
            </section>
            sections.reflection = 
            <section>
                <p style={{ whiteSpace: "pre-line" }}>
                    I believe the form data code could be made cleaner and more elegant than the solutions I had. 
                    Additionally, Making a loading menu when querying into a database instead of giving no feedback to the user.
                    <br />I would also use fewer colors and stick to about 3 or 4 colors instead of having over 7 different colors. 
                    Adding animations and enter effects to make it visually appealing would also be a plus. 
                    <br />However, with the time restraint and the task at hand. I believe I did a good job.
                </p>
            </section>;
            break;
        }

        case "3drenderofapaintinginbabylon": {
            sections.goal = 
            <section>
                <p> This was the last project for CSCI-230 Web Scripting. The instructions have a list of rules we had to follow being: </p>
                <ol>
                    <li> Must be inspired by a famous piece of art. </li>
                    <li> Must use the Universal Camera to move around in the scene. </li>
                    <li> Must be at least 1 Babylon Animation. </li>
                    <li> Must be at least 1 import asset. </li>
                    <li> Must be at least 1 particle system. </li>
                    <li> Must be at least 1 duplicate mesh using clones or instances. </li>
                    <li> Must use audio. </li>
                    <li> Must use one of the following: 
                        <ul>
                            <li> Mesh Actions </li>
                            <li> Physics </li>
                            <li> Sprites </li>
                            <li> Constructive Solid Geometry </li>
                        </ul>
                    </li>
                </ol>
                <p style={{ whiteSpace: "pre-line" }}> 
                    My additional goals were to make this feel like a game.
                    <br /> So, I wanted footsteps to reflect the material you are on. 
                    I wanted to add buildings to have at least 1 interactable building.
                    <br /> I wanted you to be able to hear the hurling winds outside. 
                    I wanted tons of trees, rocks, and terrain features as the painting I am basing it on is on a mountain.
                </p>
            </section>

            sections.problems = 
            <section>
                <p style={{ whiteSpace: "pre-line" }}> 
                    Doing the problem's main tasks like having a Universal Camera, audio, Particle System, and importing an asset was the easy part. 
                    It was the footsteps noises and making the house interactable.
                    <br /> <br />
                    Let's start with the first one, footsteps: 
                    Footsteps are challenging because we have to play the noise when you are moving.
                    <br /> We do not want to play it when you are not moving.
                    <br />
                    Additionally, we need to test whether the player is indoors. 
                    If they are indoors you need to play a certain noise. Else play the other footstep.
                    <br /><br />
                    An interactable house on a mesh is weird as we would have to make a sprite. 
                    Then, when they push the interaction button they go into the house.
                </p>
            </section>

            sections.solutions = 
            <section>
                <p>
                    For the footsteps, we stored a new Babylon 3d Vector at the player's starting position. 
                    Then, whenever it changed we simply turned a flag on (isWalking) to true and changed the coordinates. 
                    If the coordinates are the same during the requestFrame then we turn the flag off.
                    <br /><br />
                    So we have a solution to the footsteps but how about telling footsteps indoors? 
                    Well, to do that we have to have an indoors so we will get back to it.
                    <br /><br />
                    In Babylon, we must register an action to interact with Meshes. 
                    I chose E as it is normal to interact also my implementation of rooms reminded me of Oblivion so I chose E.
                    <br /><br />
                    I created a billboard as a visual that would tell the player to press E since they are close enough. 
                    If they got far enough away the billboard would disappear.
                    <br /><br />
                    Since the billboard is created when they call the event (press E), 
                    they are teleported underground, under the house.
                    <br /><br />
                    I created a room down there that is supposed to be the interior of the house.
                    <br /><br />
                    I have another flag used primarily with the billboards called canInteract. 
                    It is supposed to be for interacting with the door to go into the house. 
                    However, due to it being below the house, we do not check the y coordinate, 
                    so it is always true when inside.
                    <br /><br />
                    Therefore, we simply check two flags, canInteract, isWalking to see if both are true, then play indoor footprints, else play outdoor footprints. 
                    If you are not walking pause both.
                    <br /><br />
                    We do not stop them as pausing them will keep the time stopped producing a different sound instead of the initial sound. Making it sound more random.
                </p>
            </section>

            sections.reflection = 
            <section>
                <p>
                    For as high of a grade as I got on it (55 / 40). I do not think it deserved it. 
                    The code is very messy for starters. 
                    There is one js file and it is over 870 lines of code! That is so much code in one place. 
                    I believe separating it into files would have made it more legible, easier to manipulate, and easier to understand.
                    <br /><br />
                    Additionally, the solutions could have been easier. At least, the footsteps. 
                    What I was doing was storing the coordinates, testing the player coordinates to the stored coordinates, 
                    if they were different storing the new coordinates, then playing a noise.
                    <br /><br />
                    For movement in BabylonJS, there are 8 keys that I care about and I do not care where the player is going. 
                    So I could have done an EventListner on the window. Tested for WASD or the arrow keys. 
                    Then, play the appropriate noise. 
                    This change would have significantly, made my code easier, readable, did not need to store a B.Vector Object, and would not need to constantly get the player coordinates.
                    <br /><br />
                    For the interactable solution, I think it is fine, but if I can find that solution for walking by quickly surveying the code.
                    <br /><br />
                    I can find optimizations in the code and probably fix it if I come back to it.
                    <br /><br />
                    However, I will say this was an amazing project to do, and to see the look on everyone's faces when presenting it. For that, I am proud of this project.
                </p>
            </section>
            break;
        }

        case "professionalwebflowportfolio": {
            sections.goal = 
            <section>
                <p>
                    This was a semester-long project where I designed corporate standards for myself. 
                    From the logo to making a website (other than this one).
                    Additionally, the link will be in the reflection so you can check it out. 
                    <br /><br />
                    Anyways, the goal of this project is the following. I started with nothing and have to make the following:
                </p>
                <ol>
                    <li> A Logo </li>
                    <li> A Custom Resume </li>
                    <li> A Custom Business Card </li>
                    <li> A Custom Corporate Standards For Myself </li>
                    <li> A Webflow Website that is fully functional </li>
                </ol>
            </section>

            sections.problems = 
            <section>
                <p> The hardest step is the first and that was it. 
                    Step one (making a logo) is challenging, especially your own logo. 
                    It is you as small as possible and as big as possible depending on where you put it.
                    Whether on a website, portfolio, or on a business card, it must fit on all of them.
                    <br /><br />
                    It tells other people who you are with symbols. I know myself. So, I had to plan. Spend lots of time thinking about my symbol.
                 </p>
            </section>

            sections.solutions = 
            <section>
                <p> 
                    Lets start with the first problem the logo and before jumping in I wish to tell a short story. 
                    During High School, I was on the Cross Country and Track team and the coach would appreviate my name, Owen, to O1 (capital o and a 1).
                    Since then it has stuck in our family and whenever I meet with him again.
                    <br /><br />
                    When I was lacking inspiration, making countless logos, I remembered this story and it was genius.
                </p>
                <ul>
                    <li> If you see a O1 then: 
                        <ol>
                            <li> If you say them fast and together you get Oh-one which sounds like Owen </li>
                        </ol>
                    </li>
                    <li> If you see 01 then:
                        <li> Then, it looks like binary 01 which is just programming. (Which is what I do) </li>
                    </li>
                    <li> It is eye-catching because it simple. </li>
                </ul>
                <p>
                    Then, it explains a lot in a little amount of space. Observant for having a symbol that both says my name and what I do.
                    However, what you see was not the first iteration.
                </p>
                <img src={logos} style={{width: "250px"}} alt="Cluttered page with potential logos"/>
                <p>
                    This was the Adobe Illustrator file was at the end where I was making the designs.
                    Before I thought of that story, the design that was sticking out was this design:
                </p>
                <img src={standOut} style={{width: "250px"}} alt="Potential logos designs"/>
                <p>
                    I just was not happy with it. Even though everything works together and flows well. 
                    Me and my professor pushed it further. Until me with the help of my professor made this logo.
                    The one in the navigation bar, at the footer. It was perfect.
                    <br /><br />
                    The rest of it was pretty straight forward. 
                    I used Orange, Blue, Dark Grays because they are close to the Visual Studio Code colors.
                    As I made the first step, the top was closer to reach. 
                </p>
            </section>

            sections.reflection = 
            <section>
                <p> 
                    This was a fun confident boosting project. Refreshing from the constant optimizations, features, and other learning. 
                    Sometimes an idea will present itself, if not you just keep at it. 
                    I would have never stretched the boundries if it was not for a story my high school coach did to shorten my name from four letters to two letters.
                    A little joke that turned out to be way more telling then I thought it would be.
                    <br /><br />
                    I am proud of what I have done. The website is a mediocre I will admit. Which is why this website exists.
                    If you want to check out the webflow site here is the link: 
                    <br /><br /> 
                    <a href='https://owens-portfolio-website-387aad.webflow.io/' target="_blank" rel="noreferrer"> Click here for the Webflow Site </a>
                </p>
            </section>

            break;
        }

        case "minecraftplugins": {

            sections.goal = 
            <section>
                <p> The goal for these two plugins was to explore what I could do. These are very early projects of mine for a game called Minecraft. 
                    These were supposed to be my and my friend's entertainment to have a different experience while playing Minecraft together. </p>
                <p> So I had two ideas: </p>
                <ol>
                    <li> Create a Minecraft Plugin that made the game into a zombie apocalypse survival. </li>
                    <li> Create a Minecraft Plugin that would add different weapons with varying abilities. </li>
                </ol>
                <p> The goals are simple for both: </p>
                <ol>
                    <li> Create a Minecraft Plugin as intended. </li>
                    <li> Make it playable on any PC that can run Minecraft. </li>
                    <li> Make it fun! </li>
                </ol>
            </section>

            sections.problems = 
            <section>
                <p> CChanging Minecraft add-ons is nothing new to me. I started programming because of Minecraft Modding and I have loved programming ever since. 
                    However, there are still issues. Firstly, how do I make a plugin and how do I make it fun? </p>
                <p>  My idea for the first plugin (the zombie apocalypse survival) was to replace monsters with a horde of undead. So, I stuck with it, however, here are some issues. </p>
                <ol>
                    <li> Minecraft has a monster limit. </li>
                    <li> Minecraft monster generation starts from bottom to top. </li>
                </ol>
                <p> Lets explain why these are problems: </p>
                <ol>
                    <li> The Minecraft monster limit is for lag purposes and fairness in playing purposes which is fine until my goal collides with it. </li>
                    <li> The Minecraft monster generation updates starting from the bottom of the world to the top of the world.
                    This collides with my goal as I want them to be around the player (adds to the goal of a true apocalypse). </li>
                </ol>
                <p> For the second plugin (adding different weapons and varying abilities): </p>
                <ol>
                    <li> Making those weapons in the first place. I do not want to use the textures of things in the game already. I want to make my own. </li>
                    <li> Then, the abilities of these weapons have to be unique, somewhat balanced, and fun. </li>
                </ol>
            </section>

            sections.solutions = 
            <section>
                <p> Let's start with the first set of problems: The Monster limiter, and Minecraft monster generation. After deliberation, I thought it would be better to have the monster limiter. 
                    The monster limit plus, the horde count would make it fine, especially for lag. I have a limit that counts the amount of hostile entities. 
                    If it succeeds 900 (which it usually does), then it will stop summoning hordes of undead. </p>
                <p> For the monster generation, I wanted this plugin to feel like nowhere is safe including bases and I wanted villagers to be precious and need protection. 
                    (In Minecraft, if a villager dies to a zombie it turns into a villager zombie). </p>
                <p> So above the monsters spawning I have a timer essentially happening every 3 minutes that will spawn a horde around a random player. 
                    If you are the only one on during this time, then every 3 minutes a horde will spawn on you. This time also is based on server opening so it is a little bit more random as people join and leave at different times.
                </p>
                <p> Those were easy solutions to the problems, but the other problems are not that easy. </p>
                <p> Making interesting weapons is harder than I thought. Especially, when your friends are min-maxers (People who will find anyway to break anything to have an advantage) 
                    or are fine with what is in the game. So, I have to make them powerful enough or appealing enough, but not game warping enough to remove choices.</p>
                <p> So I decided on these for the ability: </p>
                <ol>
                    <li> Hammers:
                        <ul>
                            <li> On right-clicking the ground with the hammer in the hand, the hammer takes some durability damage but sends enemies to be flung. 
                                The radius is dependent on the material (the best weapon has a 6-block radius while the worst has a block radius).
                                Additionally, the better the material the higher it flung the enemies.
                            </li>
                            <li> Hammers hit hard but are slow to swing. </li>
                            <li> Also could be used to dig efficiently. </li>
                        </ul>
                    </li>
                    <li> Scythes:
                        <ul>
                            <li> They hit like a sword but were very fast. </li>
                            <li> They were also used to hoe the ground for planting. </li>
                        </ul>
                    </li>
                </ol>
                <p> Now that the idea of these weapons is listed, programming them was not the hardest thing to do and it was very straightforward. </p>
                <p> Making new items, however, was a challenge. I used other items in the game as a template, then added a texture pack that would automatically download when the player joins. 
                    Then, I made pixel art weapons that would fit the Minecraft aesthetics. </p>
            </section>

            sections.reflection = 
            <section>
                <p> If I was to go back to this project I would probably add more variations in zombies, and start adding custom items. 
                    I did the second plugin after the first one and tried something new which is item creation. 
                    There are probably better ways to have hordes like making mobs invisible than when 
                    they are a certain distance away from the player a horde spawns. Therefore, more hordes and it is less laggy.
                </p>
                <p> However, for a good first side projects, I am proud of these designs. </p>
            </section>

            break;
        }

        case "tictactoegamesinc": {
            
            sections.goal = 
            <section>
                <p> The goal is to recreate versions of C that uphold a high quality in terms of appearance, gameplay, speed, and rules. </p>
                <p> The first version I will talk about is tictactoeV2: </p>
                <ol> 
                    <li> No global variables. </li>
                    <li> Random Player Starts.  </li>
                    <li> Player 1 X's, Player 2 O's. </li>
                    <li> Rules of Tic Tac Toe apply for winning, losing, or cat (tying). </li>
                </ol>
                <br />
                <p> 
                    The second version I will talk about is tictactoe2.
                    <br /> 
                    This verison uses an AI as the second player making the game singleplayer. 
                </p>
                <p> The goals of this project are simple: </p>
                <ol>
                    <li> Again no global variables. </li>
                    <li> Adhere to the rules of traditional Tic Tac Toe. </li>
                    <li> Randomly decided whether AI starts first or Player Starts. </li>
                    <li> Create an AI that makes a good move. </li>
                </ol>
                <p> With the goals laid out. Let us see what problems lie ahead. </p>
            </section>
            
            sections.problems = 
            <section>
                <p> I will start with the problems in tictactoeV2. </p>
                <ol>
                    <li> How to calculate a win? Especially when you use characters it is hard to determine what is a winning scenario and what is a losing scenario. 
                        Visually it might be easy however calculating for diagonals will prove to be the hardest task. </li>
                    <li> Making the game visually appealing to viewers of the game would also be challenging. 
                        This is all done on the cmd prompt so erasing the screen while also displaying the new screen seems challenging. </li>
                </ol>
                <br />
                <p> Then with tictactoe2, I had the same issues but you added a whole new layer of complexity: </p>
                <ol>
                    <li> My goal was to do this without Google or any other help. 
                        This might not sound like a good goal but I wanted to push myself and learn from what I know. </li>
                    <li> I had to make an AI to compete against a player. </li>
                </ol>
            </section>

            sections.solutions = 
            <section>
                <p> Starting with tictactoeV2 (the multiplayer version), how do you calculate a win? It was simpler than I thought when I thought of it like this. 
                    Imagine a tug of war where each player is on either side. The position of the middle of the rope changes from zero to whichever way has an advantage. 
                    So from one perspective, the advantage bar is negative, whereas the other side is positive. </p>
                <p> Essentially Player 1 is positive numbers whereas Player 2 is negative numbers. 
                    If we look at a row and see that it adds up to 3 (or the length of the board). 
                    Then we know Player 1 has three in a row. If we see the reverse, where a row adds up to -3 (or the length of the board). 
                    Then we know Player 2 has three in a row. 
                    Additionally, we know that if it does not add up to 3 or -3 and there are no blank spaces then the row is filled up. 
                    This logic can be placed in each direction (row, columns, and diagonals). </p>
                <p> This is great but isn't our board made of characters? 
                    We cannot simply add characters together to get a number. 
                    We just need to have a filter that filters X's into + and O's into -. </p>
                <p> Okay with these two things in mind we have solved the first problem. How about the second problem, making the game look pretty?
                There were two methods I was thinking of: </p>
                <ol>
                    <li> Pushing the graphic above the screen. </li>
                    <li> Clearing the whole screen. </li>
                </ol>
                <p> At first, I thought that pushing the graphic above the screen could be easier hiding it and potentially later on you would be able to see what moves each player did. 
                    There are issues with this. Firstly, the screen could shift in size revealing the previous pages while on your turn.
                    Two screen sizes are different therefore I would have to get the screen size every time and loop through a for loop which seems very inefficient. </p>
                <p> The second one could be done. If only I could type clearly whenever I moved. Then, I saw that a program can execute commands using the system function. 
                    So, if I clear the screen and build the board whenever someone plays anything then it should look clean with no other boardstates around it or above it. </p>
                <p> An additional problems were the vertical and horizontal lines. 
                    Originally I thought I could use | and a combination of - or +, however, 
                    I saw that there were character codes for horizontal lines (\\033[4m%c|\\033[24m) to create a nice underscore for each character that needed it. </p>
                <br />
                <p> Now for tictactoe2, creating AI without Google. 
                    I wanted to challenge myself so I thought about the Tic Tac Toe theory. 
                    Yes, this sounds a little nonsensical, however, hear me out.  </p>
                <p> What are the best places to go in Tic Tac Toe? : </p>
                <ol>
                    <li> The Center </li>
                    <li> The Corners </li>
                    <li> The Middle Areas </li>
                </ol>
                <p> Well, the center is a powerful early game decision and leaves you with the most amount of open spaces potentially (8 spaces). 
                    The corners come next with a potential for 3 areas around them including the center. Lastly, the middle areas. 
                    But why are the middle areas so low? They share the same amount of space as the corners. </p>
                <p> Good question. See the potential of each area must also be determined. </p>
                <ol> 
                    <li> The center has a potential for 4 winning lines. </li>
                    <li> Each corner has the potential for 3 winning lines. </li>
                    <li> Each middle area (edge) has the potential for 2 winning lines. </li>
                </ol>
                <p> Therefore the potential of winning is decreased significantly in certain areas therefore we only want to pick the middle sections if: </p>
                <ol>
                    <li> We are winning. </li>
                    <li> We are losing and need to block. </li>
                </ol>
                <p> So we created a sudo board called options. These are our numeric options for each position and our AI will choose the position with the highest number. 
                    We initiate everything to -10 because it is a very small number and it will stay -10 if the positions are filled with something. 
                    We then initiate values if they are open on the other board to another value that is bigger than -10 in this case I put -3.
                    Then, we calculate the rows on the board to see if there are two in a row (We either need to block or win). </p>
                <p> Lets run through an example I had to solve and the Computer is playing o. : </p>
                <img src={example} style={{width: "250px"}} alt="Tic Tac Toe boardstate"/>
                <p> Anyone would say that O should go in the bottom right as you would win the game. 
                    However, with how my AI worked both top left (preventing a win) and bottom right (winning) are the same values and it always picks the first one. 
                    Therefore my AI at one point always picked to prevent a win in this scenario. </p>
                <p> This means that winning should be worth more than preventing or aggressive AI for Tic Tac Toe is a better robot. </p>
                <p> This is why in the code a winning move is worth 2 points while a prevention move is worth 1 point. </p>
            </section>

            sections.reflection = 
            <section>
                <p> This reflection is mostly going to be aimed towards the tictactoe2 or the one with the AI.
                    The AI could be better made using Alpha Beta Pruning in order to find the best move going down multiple move sets.
                    Alpha Beta Pruning would allow to look ahead into the future looking at potential opponent moves set as well giving the best option every time. </p>
                <p> Right now the robot can be tricked if you get all three corners, then you have two choices to win. I bet Alpha Beta pruning would work. 
                    However, I do not know how to write that algorithm and a goal was to create an algorithm without google. 
                    So, I did my job. A pat on the back for me on this one. </p>
            </section>
            break;
        }
        default:
            break;
    }

    return sections;
}

export default ProjectPage;