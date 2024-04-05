
function Form() {
    return (
        <div>
            <h1>To-Do List</h1>
            <div className="Form1">
                <form >
                    <div class="form-group">
                        <label for="name">Title:</label>
                        <input type="text" id="name" placeholder="Enter Title"></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Id:</label>
                        <input type="text" id="Id" placeholder="Enter Your Id"></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Creator:</label>
                        <input type="text" id="Creator" ></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Time:</label>
                        <input type="text" id="Time" ></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Timeline:</label>
                        <input type="text" id="Time" ></input>

                    </div>
                    <div class="form-group">
                        <label for="name">deadline:</label>
                        <input type="text" id="Time" ></input>

                    </div>
                    <button>Submit</button>

                </form>
            </div><br></br>
            <div className="Form2">
                <form>
                    <div class="form-group">
                        <label for="name">User Name:</label>
                        <input type="text" id="name" placeholder="Enter Title"></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Id:</label>
                        <input type="text" id="Id" placeholder="Enter Your Id"></input>

                    </div>

                    <div class="form-group">
                        <label for="name">Role:</label>
                        <input type="text" id="Creator" ></input>

                    </div>

                    <div class="form-group">
                        <label for="name">CreatedNote:</label>
                        <input type="text" id="Time" ></input>

                    </div>

                    <button>
                        Submit
                    </button>

                </form>
            </div>


        </div>


    );
}

export default Form;