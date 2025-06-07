
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Leaf, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Upload,
  BarChart3,
  Settings,
  LogOut,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = () => {
    setIsAnalyzing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const recentAnalyses = [
    { id: 1, crop: "Tomato", disease: "Late Blight", confidence: 94, status: "Critical", date: "2024-01-15" },
    { id: 2, crop: "Wheat", disease: "Rust", confidence: 87, status: "High", date: "2024-01-14" },
    { id: 3, crop: "Corn", disease: "Healthy", confidence: 96, status: "Good", date: "2024-01-13" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/6a1f13b8-be13-49cc-be23-d962ad090bb2.png" 
                  alt="Green Guard Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                  GREEN GUARD
                </h1>
                <p className="text-sm text-green-600">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Settings className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Farmer!</h2>
          <p className="text-gray-600">Monitor your crop health and detect diseases with AI precision.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Scans</CardTitle>
              <BarChart3 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Diseases Detected</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <p className="text-xs text-orange-600 flex items-center mt-1">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Healthy Crops</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">94.2%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <CheckCircle className="h-3 w-3 mr-1" />
                Excellent health rate
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Disease Detection Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-green-600" />
                <span>Disease Detection</span>
              </CardTitle>
              <CardDescription>
                Upload crop images for instant AI-powered disease analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50/50">
                <Upload className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Crop Image</h3>
                <p className="text-gray-600 mb-4">
                  Drag and drop or click to select crop images for analysis
                </p>
                <Button 
                  onClick={handleImageUpload}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Select Images'}
                </Button>
              </div>

              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Analyzing image...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="bg-green-100" />
                </div>
              )}

              {uploadProgress === 100 && !isAnalyzing && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Analysis Complete</span>
                  </div>
                  <p className="text-green-700">No diseases detected. Your crops appear healthy!</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Analyses */}
          <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span>Recent Analyses</span>
              </CardTitle>
              <CardDescription>
                Your latest crop health assessments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">{analysis.crop}</span>
                        <Badge 
                          variant="outline"
                          className={
                            analysis.status === 'Critical' ? 'border-red-200 text-red-800 bg-red-50' :
                            analysis.status === 'High' ? 'border-orange-200 text-orange-800 bg-orange-50' :
                            'border-green-200 text-green-800 bg-green-50'
                          }
                        >
                          {analysis.disease}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Confidence: {analysis.confidence}%</span>
                        <span>{analysis.date}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      analysis.status === 'Critical' ? 'bg-red-500' :
                      analysis.status === 'High' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center space-y-2 border-green-200 hover:bg-green-50 hover:border-green-300"
            >
              <Camera className="h-8 w-8 text-green-600" />
              <span>New Scan</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center space-y-2 border-green-200 hover:bg-green-50 hover:border-green-300"
            >
              <BarChart3 className="h-8 w-8 text-green-600" />
              <span>View Reports</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-center space-y-2 border-green-200 hover:bg-green-50 hover:border-green-300"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span>Crop Library</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
