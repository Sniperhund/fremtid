interface TextEntry {
	time: number // In seconds
	text: string
	trainingPart?: boolean
	beforeUserInput?: boolean
	showCursor?: boolean
}

export const Text: TextEntry[] = [
	{
		time: 2,
		text: "[root@217.104.255.22 ArtificalIntelligence]$ ",
		beforeUserInput: true,
	},
	{
		time: 2.1,
		text: "nvidia-smi\n",
	},
	{
		time: 3,
		text: "+-----------------------------------------------------------------------------------------+\n\
| NVIDIA-SMI 550.144.03             Driver Version: 550.144.03     CUDA Version: 12.4     |\n\
|-----------------------------------------+------------------------+----------------------+\n\
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |\n\
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |\n\
|                                         |                        |               MIG M. |\n\
|=========================================+========================+======================|\n\
|   0  NVIDIA H100 80GB HBM3          On  |   00000000:08:00.0  On |                  N/A |\n\
| 57%   25C    P0             75W /  700W |     793MiB /  81559MiB |     1%       Default |\n\
|                                         |                        |                  N/A |\n\
+-----------------------------------------+------------------------+----------------------+\n",
	},
	{
		time: 6,
		text: "[root@217.104.255.22 ArtificalIntelligence]$ ",
		beforeUserInput: true,
	},
	{
		time: 6.1,
		text: "python train.py\n",
	},
	{
		time: 8,
		text: "Initializing AI Training Module...\n",
	},
	{
		time: 9.5,
		text: "-----------------------------------\n\
Loading dataset... ✔\n\
Shuffling data...  ✔\n\
Normalizing inputs...  ✔\n\
-----------------------------------\n",
	},
	{
		time: 10,
		text: "Starting Training on GPU 0...\n",
	},
	{
		time: 11,
		text: "",
		trainingPart: true,
	},
	{
		time: 12,
		// Skynet is coming for us ALL!
		text: "-----------------------------------\n\
Optimization complete.\n\
Final Model Saved: skynet_0.4.ai ✔\n\
-----------------------------------\n",
	},
	{
		time: 13,
		text: "Deploying AI model to servers...\nPlease wait...\n",
	},
	{
		time: 16,
		text: "AI Ready for Inference.\n",
	},
	{
		time: 17,
		text: "[root@217.104.255.22 ArtificalIntelligence]$ ",
		showCursor: true,
	},
]

export const getRandomArbitrary = (min: number, max: number): number => {
	return Math.random() * (max - min) + min
}
