
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackFormSubmission } from "@/lib/analytics";

export function PopupForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", number: "" });
    const [errors, setErrors] = useState({ name: "", number: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Only suppress on thank you page to avoid double interaction immediate after submission
        if (location.pathname === "/thank-you") {
            return;
        }

        // Show popup after a very short delay, every time
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const validate = () => {
        let isValid = true;
        const newErrors = { name: "", number: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = "Name can only contain letters";
            isValid = false;
        }

        // Phone: Required, 10 digits
        if (!formData.number.trim()) {
            newErrors.number = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.number)) {
            newErrors.number = "Phone number must be exactly 10 digits";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate() && !isSubmitting) {
            setIsSubmitting(true);
            try {
                // Store name BEFORE clearing form
                const userName = formData.name.trim();
                
                // Submit to Google Sheets
                await submitToGoogleSheets({
                    name: userName,
                    phone: formData.number.trim(),
                    source: 'popup',
                });

                // Track form submission
                trackFormSubmission('popup');

                // Clear form
                setFormData({ name: "", number: "" });
                setErrors({ name: "", number: "" });
                setIsOpen(false);
                // Navigate with stored name
                navigate(`/thank-you?name=${encodeURIComponent(userName)}`);
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Something went wrong. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden gap-0 border-none rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side - Visual UI */}
                    <div className="hidden md:flex flex-col justify-between bg-[#1A1F2C] p-8 text-white relative overflow-hidden">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                            <div className="absolute -top-[50px] -left-[50px] w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute top-[40%] right-[-20px] w-[150px] h-[150px] bg-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-[-20px] left-[20%] w-[180px] h-[180px] bg-indigo-500/20 rounded-full blur-3xl"></div>
                        </div>

                        <div className="z-10 relative h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    Transform Your Digital Presence
                                </h2>
                                <p className="mt-4 text-gray-400 leading-relaxed">
                                    Join hundreds of businesses scaling with our expert strategies.
                                </p>
                            </div>

                            <div className="space-y-6 my-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-blue-400"
                                        >
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Web Development</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Modern, fast, and responsive websites built for conversion.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-500/10 rounded-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-purple-400"
                                        >
                                            <line x1="12" x2="12" y1="20" y2="10" />
                                            <line x1="18" x2="18" y1="20" y2="4" />
                                            <line x1="6" x2="6" y1="20" y2="16" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Digital Marketing</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Targeted strategies to grow your reach and ROI.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                                <div className="h-1 w-4 bg-gray-700 rounded-full"></div>
                                <div className="h-1 w-4 bg-gray-700 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-8 flex flex-col justify-center bg-background relative">

                        {/* Custom Close Button for better positioning if needed, though DialogContent has one by default */}
                        {/* <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black"><X size={20}/></button> */}

                        <div className="space-y-2 mb-6 text-center md:text-left">
                            <h3 className="text-xl font-semibold tracking-tight">Get in Touch</h3>
                            <p className="text-sm text-muted-foreground">Fill in your details to get started.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="number">Phone Number</Label>
                                <Input
                                    id="number"
                                    type="tel"
                                    placeholder="9876543210"
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                    className={errors.number ? "border-red-500" : ""}
                                />
                                {errors.number && <p className="text-xs text-red-500">{errors.number}</p>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 mt-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
