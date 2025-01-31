import { useState } from 'react';

const AIInput = () => {
    const [formData, setFormData] = useState({
        impressions: '',
        clicks: '',
        adSpend: '',
        city: '',
        profession: '',
        platform: '',
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setPrediction(data.prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div>
            <h2>AI Prediction</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="impressions" placeholder="Impressions" onChange={handleChange} />
                <input type="number" name="clicks" placeholder="Clicks" onChange={handleChange} />
                <input type="number" name="adSpend" placeholder="Ad Spend" onChange={handleChange} />
                <input type="text" name="city" placeholder="City" onChange={handleChange} />
                <input type="text" name="profession" placeholder="Profession" onChange={handleChange} />
                <input type="text" name="platform" placeholder="Platform" onChange={handleChange} />
                <button type="submit">Get Prediction</button>
            </form>
            {prediction && <h3>Predicted Value: {prediction}</h3>}
        </div>
    );
};

export default AIInput;
